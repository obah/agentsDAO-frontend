"use client";

import { useEffect, useState } from "react";
import {
  AgentsDAOABI,
  AgentsDAOAddress,
  AgentsNFTABI,
  AgentsNFTAddress,
} from "@/lib/constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { formatEther } from "viem/utils";
import { useAccount, useBalance, useContractRead } from "wagmi";
import { readContract, waitForTransaction, writeContract } from "wagmi/actions";
import styles from "./page.module.css";

type Id = number;
type Vote = string;
type Proposal =
  | {
      proposalId: Id;
      nftTokenId: Id;
      deadline: number;
      yesVotes: unknown;
      noVotes: unknown;
      exexuted: boolean;
    }
  | any;

export default function Home() {
  const { address, isConnected } = useAccount();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nftTokenId, setNftTokenId] = useState<string>("");
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("");

  useEffect(() => {
    if (selectedTab === "View Proposals") {
      fetchAllProposals();
    }
  }, [selectedTab]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const daoOwner = useContractRead({
    abi: AgentsDAOABI,
    address: AgentsDAOAddress,
    functionName: "owner",
  });

  const daoBalance = useBalance({
    address: AgentsDAOAddress,
  });

  const numOfProposalsInDao = useContractRead({
    abi: AgentsDAOABI,
    address: AgentsDAOAddress,
    functionName: "numOfProposals",
  });

  const nftBalanceOfUser = useContractRead({
    abi: AgentsNFTABI,
    address: AgentsNFTAddress,
    functionName: "balanceOf",
    args: [address],
  });

  async function createProposal() {
    setIsLoading(true);

    try {
      const tx = await writeContract({
        address: AgentsDAOAddress,
        abi: AgentsDAOABI,
        functionName: "createProposal",
        args: [nftTokenId],
      });

      await waitForTransaction(tx);
    } catch (err) {
      console.error(err);
      window.alert(err);
    }

    setIsLoading(false);
  }

  async function fetchProposalById(id: Id) {
    try {
      const proposal: Proposal = await readContract({
        address: AgentsDAOAddress,
        abi: AgentsDAOABI,
        functionName: "proposals",
        args: [id],
      });

      //@ts-ignore
      const [nftTokenId, deadline, yesVotes, noVotes, executed] = proposal;

      const parsedProposal = {
        proposalId: id,
        nftTokenId: nftTokenId.toString(),
        deadline: new Date(parseInt(deadline.toString()) * 1000),
        yesVotes: yesVotes.toString(),
        noVotes: noVotes.toString(),
        executed: Boolean(executed),
      };

      return parsedProposal;
    } catch (err) {
      console.error(err);
      window.alert(err);
    }
  }

  async function fetchAllProposals() {
    try {
      const proposals: Proposal[] = [];
      //@ts-ignore
      for (let i = 0; (i < numOfProposalsInDao.data) as number; i++) {
        const proposal = await fetchProposalById(i);
        proposals.push(proposal);
      }

      setProposals(proposals);
      return proposals;
    } catch (err) {
      console.error(err);
      window.alert(err);
    }
  }

  async function voteForProposal(proposalId: Id, vote: Vote) {
    setIsLoading(true);
    try {
      const tx = await writeContract({
        address: AgentsDAOAddress,
        abi: AgentsDAOABI,
        functionName: "voteOnProposal",
        args: [proposalId, vote === "YES" ? 0 : 1],
      });

      await waitForTransaction(tx);
    } catch (err) {
      console.error(err);
      window.alert(err);
    }
    setIsLoading(false);
  }

  async function executeProposal(proposalId: Id) {
    setIsLoading(true);
    try {
      const tx = await writeContract({
        address: AgentsDAOAddress,
        abi: AgentsDAOABI,
        functionName: "executeProposal",
        args: [proposalId],
      });

      await waitForTransaction(tx);
    } catch (err) {
      console.error(err);
      window.alert(err);
    }
    setIsLoading(false);
  }

  async function withdrawDaoEther() {
    setIsLoading(true);
    try {
      const tx = await writeContract({
        address: AgentsDAOAddress,
        abi: AgentsDAOABI,
        functionName: "withdrawEther",
        args: [],
      });

      await waitForTransaction(tx);
    } catch (err) {
      console.error(err);
      window.alert(err);
    }
    setIsLoading(false);
  }

  function renderTabs() {
    if (selectedTab === "Create Proposal") {
      return renderCreateProposalTab();
    } else if (selectedTab === "View Proposals") {
      return renderViewPropsalsTab();
    }
    return null;
  }

  function renderCreateProposalTab() {
    if (isLoading) {
      return (
        <div className={styles.description}>
          Loading... Waiting for transaction...
        </div>
      );
    } else if (nftBalanceOfUser.data === 0) {
      return (
        <div className={styles.description}>
          You do not own any Agents NFTs. <br />
          <b>You can not create or vote on proposals</b>
        </div>
      );
    } else {
      <div className={styles.container}>
        <label>XAgents NFT Token ID to purchase:</label>
        <input
          placeholder="0"
          type="number"
          onChange={(e) => setNftTokenId(e.target.value)}
        />
        <button className={styles.button2} onClick={createProposal}>
          Create
        </button>
      </div>;
    }
  }

  function renderViewPropsalsTab() {
    if (isLoading) {
      return (
        <div className={styles.description}>
          Loading... Waiting for transaction...
        </div>
      );
    } else if (proposals.length === 0) {
      return (
        <div className={styles.description}>
          No proposals have been created yet
        </div>
      );
    } else {
      <div>
        {proposals.map((p, index) => (
          <div key={index} className={styles.card}>
            <p>Proposal ID: {p.proposalId}</p>
            <p>XAgents NFT to Purchase: {p.nftTokenId}</p>
            <p>Deadline: {p.deadline.toLocaleString()}</p>
            <p>Yes votes: {p.yesVotes}</p>
            <p>No votes: {p.noVotes}</p>
            <p>Executed: {p.executed.toString()}</p>
            {p.deadline.getTime() > Date.now() && !p.executed ? (
              <div className={styles.flex}>
                <button
                  className={styles.button2}
                  onClick={() => voteForProposal(p.proposalId, "YES")}
                >
                  Vote YES
                </button>
                <button
                  className={styles.button2}
                  onClick={() => voteForProposal(p.proposalId, "NO")}
                >
                  Vote NO
                </button>
              </div>
            ) : p.deadline.getTime() < Date.now() && !p.executed ? (
              <div className={styles.flex}>
                <button
                  className={styles.button2}
                  onClick={() => executeProposal(p.proposalId)}
                >
                  Execute Proposal {p.yesVotes > p.noVotes ? "(YES)" : "(NO)"}
                </button>
              </div>
            ) : (
              <div className={styles.description}>Proposal Executed</div>
            )}
          </div>
        ))}
      </div>;
    }
  }

  if (!isMounted) return null;

  if (!isConnected)
    return (
      <div>
        <ConnectButton />
      </div>
    );

  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.title}>Welcome to the Agents DAO</h1>
        <div className={styles.description}>Welcome Agent!</div>
        <div className={styles.description}>
          {/*//@ts-ignore*/}
          Your AgentsNFT Balance: {nftBalanceOfUser.data.toString()}
          <br />
          {daoBalance.data && (
            <>
              Treasury Balance: {formatEther(daoBalance.data.value).toString()}{" "}
              ETH
            </>
          )}
          <br />
          {/*//@ts-ignore*/}
          Total Number of Proposals: {numOfProposalsInDao.data.toString()}
        </div>
        <div className={styles.flex}>
          <button
            className={styles.button}
            onClick={() => setSelectedTab("Create Proposal")}
          >
            Create Proposal
          </button>
          <button
            className={styles.button}
            onClick={() => setSelectedTab("View Proposals")}
          >
            View Proposals
          </button>
        </div>
        {renderTabs()}
        {/*//@ts-ignore*/}
        {address && address.toLowerCase() === daoOwner.data.toLowerCase() ? (
          <div>
            {isLoading ? (
              <button className={styles.button}>Loading...</button>
            ) : (
              <button className={styles.button} onClick={withdrawDaoEther}>
                Withdraw DAO ETH
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <img className={styles.image} src="https://i.imgur.com/buNhbF7.png" />
      </div>
    </div>
  );
}

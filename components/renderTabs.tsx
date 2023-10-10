"use client";

import { useState, useEffect } from "react";
import ViewProposals from "@/components/viewProposals";
import CreateProposal from "@/components/createProposal";
import { Id, Proposal } from "@/types";
import { AgentsDAOAddress, AgentsDAOABI } from "@/lib/constants";
import { readContract } from "wagmi/actions";
import styles from "./page.module.css";

interface Props {
  numOfProposals: unknown;
  nftBalance: unknown;
}

export function RenderTabs({ numOfProposals, nftBalance }: Props) {
  const [selectedTab, setSelectedTab] = useState<string>("");
  const [proposals, setProposals] = useState<Proposal[]>([]);

  useEffect(() => {
    if (selectedTab === "View Proposals") {
      fetchAllProposals();
    }
  }, [selectedTab]);

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
      const lengthOfProposals = numOfProposals as number;

      for (let i = 0; i < lengthOfProposals; i++) {
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

  return (
    <>
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

      {selectedTab === "Create Proposal" ? (
        <CreateProposal nftBalance={nftBalance} />
      ) : selectedTab === "View Proposals" ? (
        <ViewProposals proposals={proposals} />
      ) : null}
    </>
  );
}

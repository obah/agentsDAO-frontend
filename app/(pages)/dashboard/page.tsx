"use client";

import {
  AgentsDAOABI,
  AgentsDAOAddress,
  AgentsNFTABI,
  AgentsNFTAddress,
} from "@/lib/constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { formatEther } from "viem/utils";
import { useAccount, useBalance, useContractRead } from "wagmi";
import { RenderTabs } from "@/components/renderTabs";
import Withdraw from "@/components/withdraw";
import useMounted from "@/hooks/useMounted";

export default function Page() {
  const { address, isConnected } = useAccount();
  const { isMounted } = useMounted();

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

  if (!isMounted) return null;

  if (!isConnected)
    return (
      <div>
        <ConnectButton />
      </div>
    );

  return (
    <section>
      <h1>Welcome to the Agents DAO</h1>
      <div>Welcome Agent!</div>

      <div>
        Your AgentsNFT Balance: {nftBalanceOfUser.data?.toString()}
        <br />
        {daoBalance.data && (
          <>
            Treasury Balance: {formatEther(daoBalance.data.value).toString()}{" "}
            ETH
          </>
        )}
        <br />
        Total Number of Proposals: {numOfProposalsInDao.data?.toString()}
      </div>

      <RenderTabs
        numOfProposals={numOfProposalsInDao.data}
        nftBalance={nftBalanceOfUser.data}
      />

      {/*//@ts-ignore*/}
      {address && address.toLowerCase() === daoOwner.data?.toLowerCase() ? (
        <Withdraw />
      ) : null}
    </section>
  );
}

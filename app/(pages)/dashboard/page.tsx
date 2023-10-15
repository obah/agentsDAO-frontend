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
import {
  SectionContainer,
  StyledSection,
} from "@/components/styles/Section.styled";

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

  return (
    <StyledSection $bg="primary">
      <SectionContainer>
        <h1>Welcome to the Agents DAO</h1>
        <div>Welcome Agent!</div>

        {isConnected ? (
          <div>
            <div>
              Your AgentsNFT Balance: {nftBalanceOfUser.data?.toString()}
              <br />
              {daoBalance.data && (
                <>
                  Treasury Balance:{" "}
                  {formatEther(daoBalance.data.value).toString()} ETH
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
            {address &&
            address.toLowerCase() === daoOwner.data?.toLowerCase() ? (
              <Withdraw />
            ) : null}
          </div>
        ) : (
          <div>
            <p>Please connect your wallet</p>
            <ConnectButton />
          </div>
        )}
      </SectionContainer>
    </StyledSection>
  );
}

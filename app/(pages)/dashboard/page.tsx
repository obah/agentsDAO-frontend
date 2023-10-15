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
import { Grid, StyledSection, Title } from "@/components/styles/App.styled";
import { StyledDiv, Table } from "@/components/styles/Dashboard.styled";
import { Eye } from "@/assets/images/Eye";

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
    <StyledSection>
      <Title>
        <h1>Dashboard</h1>
        <h2>Welcome Agent!</h2>
      </Title>

      {isConnected ? (
        <Grid $multichild>
          <StyledDiv $type="connected">
            <h3>Net worth</h3>
            <Table>
              <p>Your AgentsNFT Balance:</p>
              <span>{nftBalanceOfUser.data?.toString()}</span>
            </Table>

            {daoBalance.data && (
              <Table>
                <p>Treasury Balance:</p>
                <span>{formatEther(daoBalance.data.value).toString()} ETH</span>
              </Table>
            )}

            <Table>
              <p>Total Number of Proposals: </p>
              <span>{numOfProposalsInDao.data?.toString()}</span>
            </Table>
          </StyledDiv>

          <StyledDiv $type="connected">
            <h3>Proposals</h3>
            <RenderTabs
              numOfProposals={numOfProposalsInDao.data}
              nftBalance={nftBalanceOfUser.data}
            />
          </StyledDiv>

          {/*//@ts-ignore*/}
          {address && address.toLowerCase() === daoOwner.data?.toLowerCase() ? (
            <Withdraw />
          ) : null}
        </Grid>
      ) : (
        <Grid>
          <StyledDiv $type="unconnected">
            <Eye />
            <h3>Please, connect your wallet</h3>
            <p>Please connect your wallet to be able to access the DAO</p>
            <ConnectButton />
          </StyledDiv>
        </Grid>
      )}
    </StyledSection>
  );
}

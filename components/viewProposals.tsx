"use client";

import { AgentsDAOAddress, AgentsDAOABI } from "@/lib/constants";
import { Id, Proposal, Vote } from "@/types";
import { useState } from "react";
import { writeContract, waitForTransaction } from "wagmi/actions";
import ProposalCard from "./proposalCard";
import { Loader } from "./styles/Loader.styled";

type Props = {
  proposals: Proposal[];
};

export default function ViewProposals({ proposals }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : proposals.length === 0 ? (
        <p>No proposals have been created yet</p>
      ) : (
        <div>
          {proposals.map((p) => (
            <div key={p.proposalId}>
              <ProposalCard
                proposal={p}
                voteFn={voteForProposal}
                executeFn={executeProposal}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

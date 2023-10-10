import { Id, Proposal, Vote } from "@/types";
import styles from "./page.module.css";

interface Props {
  proposal: Proposal;
  voteFn: (id: Id, vote: Vote) => void;
  executeFn: (id: Id) => void;
}

function ProposalCard({ proposal, voteFn, executeFn }: Props) {
  const { proposalId, nftTokenId, deadline, yesVotes, noVotes, executed } =
    proposal;

  return (
    <>
      <p>Proposal ID: {proposalId}</p>
      <p>XAgents NFT to Purchase: {nftTokenId}</p>
      <p>Deadline: {deadline.toLocaleString()}</p>
      <p>Yes votes: {yesVotes}</p>
      <p>No votes: {noVotes}</p>
      <p>Executed: {executed.toString()}</p>
      {deadline.getTime() > Date.now() && !executed ? (
        <div className={styles.flex}>
          <button
            className={styles.button2}
            onClick={() => voteFn(proposalId, "YES")}
          >
            Vote YES
          </button>
          <button
            className={styles.button2}
            onClick={() => voteFn(proposalId, "NO")}
          >
            Vote NO
          </button>
        </div>
      ) : deadline.getTime() < Date.now() && !executed ? (
        <div className={styles.flex}>
          <button
            className={styles.button2}
            onClick={() => executeFn(proposalId)}
          >
            Execute Proposal {yesVotes > noVotes ? "(YES)" : "(NO)"}
          </button>
        </div>
      ) : (
        <div className={styles.description}>Proposal Executed</div>
      )}
    </>
  );
}

export default ProposalCard;

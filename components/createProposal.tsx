import { useState } from "react";
import { AgentsDAOAddress, AgentsDAOABI } from "@/lib/constants";
import { writeContract, waitForTransaction } from "wagmi/actions";

type Props = {
  nftBalance: unknown;
};

export default function CreateProposal({ nftBalance }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nftTokenId, setNftTokenId] = useState<string>("");

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

  return (
    <>
      {isLoading ? (
        <div>Loading... Waiting for transaction...</div>
      ) : nftBalance === 0 ? (
        <div>
          You do not own any Agents NFTs. <br />
          <b>You can not create or vote on proposals</b>
        </div>
      ) : (
        <div>
          <label>XAgents NFT Token ID to purchase:</label>
          <input
            placeholder="0"
            type="number"
            onChange={(e) => setNftTokenId(e.target.value)}
          />
          <button onClick={createProposal}>Create</button>
        </div>
      )}
    </>
  );
}

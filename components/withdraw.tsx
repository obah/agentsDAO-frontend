"use client";

import { useState } from "react";
import { AgentsDAOAddress, AgentsDAOABI } from "@/lib/constants";
import { writeContract, waitForTransaction } from "wagmi/actions";
import { Loader } from "./styles/Loader.styled";

function Withdraw() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  return (
    <div>
      {isLoading ? (
        <button>
          <Loader></Loader>
        </button>
      ) : (
        <button onClick={withdrawDaoEther}>Withdraw DAO ETH</button>
      )}
    </div>
  );
}

export default Withdraw;

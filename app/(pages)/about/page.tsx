"use client";

import { StyledSection } from "@/components/styles/App.styled";

export default function Page() {
  return (
    <StyledSection>
      <h1>About The Agents</h1>
      <div>
        <p>
          The Agents is a global group of digital collectors and web3
          enthusiats, all agreeing together to own and sell various assets.
        </p>

        <p>
          One of the most promising applications of Ethereum is the
          decentralized (autonomous) organization, also known as a DAO. In 2016,
          the Ethereum community saw the first great experiment with DAOs with
          the launch of "The DAO." The DAO raised over $150 million dollars, but
          it ultimately failed due to legal and technical challenges.
        </p>

        <p>
          The Agents is a built on that vision of a truly decentralised
          autonomous body and it's use case is with asset speculation. Mainly
          NFTs and Tokens, Agents (members of The Agents DAO) autonomously
          participate in this process by either making individual proposals to
          acquire/liquidate a digital asset or vote in support/against for
          proposals made by other Agents. The only requirement to becoming an
          Agent is to own any of The Agents NFT.
        </p>

        <p>
          The project was built by Obaloluwa Olusoji (with NextJs, Typescript,
          StyledComponents, Solidity and EthersJs), a frontend developer
          passionate about Web3 and various applications of Blockchain
          technology. You can view the source code to the DAO and the Frontend
          in the links below. Any contribution or suggestion on improvement is
          welcome and highly appreciated.
        </p>

        <div>
          <a
            href="https://github.com/obah/agents-dao"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Agents DAO source code
          </a>
          <a
            href="https://github.com/obah/agentsDAO-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Agents Frontend source code
          </a>
        </div>

        <p>
          Disclaimer, this is just a fictional project, all the assets owned,
          members and other statistics are just dummy data.
        </p>
      </div>
    </StyledSection>
  );
}

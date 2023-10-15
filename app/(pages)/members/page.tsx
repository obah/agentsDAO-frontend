"use client";

import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import members from "@/lib/memberAddress.json";
import { StyledSection } from "@/components/styles/App.styled";

export default function Page() {
  const [memberSize, setMemberSize] = useState<number>(0);

  useEffect(() => {
    const memberLength = members.length;
    setMemberSize(memberLength);
  }, []);

  return (
    <StyledSection>
      <h1>Meet The Agents</h1>
      <p>
        Current Agents: <span>{memberSize}</span>
      </p>

      <div>
        <div>{/*image here*/}</div>

        <h3
          data-tooltip-id="my-tooltip"
          data-tooltip-content="0x9ce826910f5e22A6e22A6a0418033b2677505752"
          data-tooltip-place="top"
        >
          Obaloluwa10
        </h3>
        <p>DAO Maximalist, Blockchain Engineer, Digital Collector</p>
      </div>

      <div>
        <h2>Private Members</h2>
        <div>
          <ul>
            {members.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>

      <Tooltip id="my-tooltip" />
    </StyledSection>
  );
}

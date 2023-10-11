"use client";

import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import members from "@/lib/memberAddress.json";

export default function Page() {
  const [memberSize, setMemberSize] = useState<number>(0);

  useEffect(() => {
    const memberLength = members.length;
    setMemberSize(memberLength);
  }, []);

  return (
    <section>
      <h1>Meet The Agents</h1>
      <p>
        Current Agents: <span>{memberSize}</span>
      </p>

      <div>
        <div>{/*image here*/}</div>
        <h3
          data-tooltip-id="my-tooltip"
          data-tooltip-content="hey it worked"
          data-tooltip-place="top"
        >
          Obaloluwa10
        </h3>
        <p>DAO Maximalist, Blockchain Engineer, Digital Collector</p>
      </div>

      <div>
        <h2>Private Members</h2>
        <div>{/* render a list of addresses here...36 */}</div>
      </div>

      <Tooltip id="my-tooltip" />
    </section>
  );
}

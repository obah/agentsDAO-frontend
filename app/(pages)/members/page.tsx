"use client";

import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import members from "@/lib/memberAddress.json";
import { Grid, StyledSection, Title } from "@/components/styles/App.styled";
import { StyledDiv, Table } from "@/components/styles/Dashboard.styled";
import {
  MembersArea,
  MembersSection,
  OwnerCard,
  ImageWrapper,
} from "@/components/styles/Members.styled";
import ProfileNFT from "@/assets/images/ProfileNFT.jpg";
import Image from "next/image";

export default function Page() {
  const [memberSize, setMemberSize] = useState<number>(0);

  useEffect(() => {
    const memberLength = members.length;
    setMemberSize(memberLength);
  }, []);

  return (
    <StyledSection>
      <Title>
        <h1>Meet The Agents</h1>
      </Title>

      <Grid>
        <StyledDiv $type="connected">
          <Table>
            <p>Current Agents:</p> <span>{memberSize}</span>
          </Table>

          <OwnerCard>
            <ImageWrapper>
              <Image src={ProfileNFT} alt="profile image" />
            </ImageWrapper>
            <div>
              <h3
                data-tooltip-id="my-tooltip"
                data-tooltip-content="0x9ce826910f5e22A6e22A6a0418033b2677505752"
                data-tooltip-place="top"
              >
                Obaloluwa10
              </h3>

              <p>DAO Maximalist, Blockchain Engineer, Digital Collector</p>
            </div>
          </OwnerCard>
        </StyledDiv>

        <StyledDiv $type="connected">
          <MembersArea>
            <h2>Private Members</h2>

            <MembersSection>
              {members.map((member) => (
                <li
                  key={member}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={member}
                  data-tooltip-place="top"
                >
                  {member}
                </li>
              ))}
            </MembersSection>
          </MembersArea>
        </StyledDiv>
      </Grid>

      <Tooltip id="my-tooltip" />
    </StyledSection>
  );
}

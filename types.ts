export type Id = number;
export type Vote = string;
export type Proposal =
  | {
      proposalId: Id;
      nftTokenId: Id;
      deadline: number;
      yesVotes: unknown;
      noVotes: unknown;
      exexuted: boolean;
    }
  | any;

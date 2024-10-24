export type TeamOwnersResponse = {
  data: {
    teamOwners: TeamOwnerData[];
  };
  totalBrandCount: 0;
  totalNoOfEntries: 0;
  pageNo: 0;
};

export type TeamOwnerData = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  profileImageUrl: string;
  teamId: 0;
  brandCount: 0;
};

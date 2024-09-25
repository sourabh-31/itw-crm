export type NewsItem = {
  newsId: number;
  newsType: string;
  title: string;
  description: string;
  date: string;
  activeUntil?: string;
  appreciatedAlready: boolean;
  appreciationCount: number;
  externalUrl: string;
  externalUrlType: string;
  imageUrl: string;
  isPinned: number;
  lastUpdatedOn: string;
  pinnedAt?: string;
  visibility: string;
};

// Type for user team member
export type TeamMember = {
  userId: number;
  userName: string;
  userFirstName: string;
  userLastName: string;
  email: string;
  phoneNumber: string;
  phoneNumberCountryCode: number;
  profileImageUrl: string;
  roles: string[];
  userCity: string;
  userDesignation?: string;
  userEmail: string;
  userProfileImageUrl: string;
  userStatus?: string;
  lastActiveOn?: string;
};

// Type for a brand's owner
export type BrandOwner = {
  brandContactType: string | null;
  brandId: number;
  brandOwnerProfileImageUrl: string;
  brandOwnerUserId: number;
  brandOwnerUserName: string;
  lastActiveOn: string;
  verticalName: string;
};

// Type for brand
export type Brand = {
  brandId: number;
  brandName: string;
  boCount: number;
  brandContactType: string | null;
  brandContactTypeId?: number | null;
  brandImageUrl: string;
  brandOwners: BrandOwner[];
  companyName: string;
  eventCount: number;
  hqLocationName: string;
  industryId: number;
  industryName: string;
  isMultiBO: boolean;
  isNewBrand: boolean;
  isOffloaded: boolean;
  lastCollaboration: string | null;
  lastContactMedium: string | null;
  lastContacted: string | null;
  marketingLocationId?: number | null;
  marketingLocationName?: string | null;
  offloadReason: string | null;
};

// Main data structure
export type BrandsAndTeam = {
  eventsInventories: any[];
  eventsInventoriesCount: number;
  eventsInventoriesPerformance: any[];
  eventsInventoriesPerformanceCount: number;
  news: NewsItem[];
  serviceReqAvailable: boolean;
  serviceRequestCount: number;
  unreadNotificationCount: number;
  userAssignedEventInventories: any[];
  userAssignedEventInventoriesCount: number;
  userBrands: {
    brands: Brand[];
    totalNoOfBrands: number;
  };
  companyName: string;
  eventCount: number;
  hqLocationName: string;
  industryId: number;
  industryName: string;
  isMultiBO: boolean;
  isNewBrand: boolean;
  isOffloaded: boolean;
  lastCollaboration?: string;
  lastContactMedium: string;
  lastContacted: string;
  marketingLocationId?: number;
  marketingLocationName?: string;
  offloadReason?: string;
  userTeam: {
    teamId: number;
    teamMembers: TeamMember[];
    totalMemberCount: number;
  };
};

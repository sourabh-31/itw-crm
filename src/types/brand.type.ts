// Define and export the structure for the user
export interface User {
  id: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  deletedAt: string;
  profileImage: string;
  phoneNumberCountryCode: number;
  phoneNumber: string;
  fcmToken: string;
  gender: "MALE" | "FEMALE";
  isFirstLogin: boolean;
  hasChatAccount: boolean;
  lastActiveOn: string;
  deactivated: boolean;
  deactivateReason: string;
  oauthRefreshToken: string;
  pocLasUpdatedOn: string;
}

// Define and export the structure for brand owners
export interface BrandOwner {
  id: number;
  user: User;
}

// Define and export the structure for a brand
export interface Brand {
  id: number;
  name: string;
  description: string;
  revenue: string;
  category: string;
  campaingTimelines: string;
  targetAudience: string;
  brandImage: string;
  lastContacted: string;
  lastContactMedium: string;
  lastCollaboration: string;
  brandOwners: BrandOwner[];
  deletedAt: string;
  infoUpdateAlertSentOn: string;
}

// Define and export the structure for the response data
export interface BrandData {
  totalBrands: number;
  totalPage: number;
  brands: Brand[];
}

// Define and export the structure for the response message
export interface BrandResponse {
  message: string;
  data: BrandData;
}

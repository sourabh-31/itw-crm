export type CommentResponse = {
  message: string;
  comments: Comment[];
  totalComments: number;
  totalPages: number;
};

export type Comment = {
  id: number;
  isTimeline: boolean;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  addedBy: AddedBy;
  taskCommentAttachments: [];
};

export type AddedBy = {
  id: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  deletedAt: null | string;
  profileImage: string;
  phoneNumberCountryCode: number;
  phoneNumber: string;
  fcmToken: string;
  gender: string;
  isFirstLogin: boolean;
  hasChatAccount: boolean;
  lastActiveOn: string;
  deactivated: boolean;
  deactivateReason: null | string;
  oauthRefreshToken: string;
  pocLastUpdatedOn: string;
};
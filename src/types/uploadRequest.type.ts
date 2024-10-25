export type UploadResponse = {
  data: UploadData;
};

export type UploadData = {
  url: string;
  fileName: string;
  fields: UploadField;
};

export type UploadField = {
  bucket: string;
  "X-Amz-Algorithm": string;
  "X-Amz-Credential": string;
  "X-Amz-Date": string;
  Policy: string;
  "X-Amz-Signature": string;
};

export type Attachment = {
  url: string;
  fileSize: string;
  fileName: string;
};

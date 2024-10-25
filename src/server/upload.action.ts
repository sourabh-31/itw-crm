import axios from "axios";

export async function uploadRequest(contentType: string) {
  try {
    const response = await axios.get(
      `https://beta-api.itwcrm.com/user/upload-request?contentType=${contentType}&purpose=MISC_FILE`,
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to upload request");
  }
}

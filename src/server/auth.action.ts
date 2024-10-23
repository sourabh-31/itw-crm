import axios from "axios";

export async function signInUser(token: string): Promise<any> {
  const response = await axios.post(`https://beta-api.itwcrm.com/user/auth`, {
    token,
  });
  return response.data;
}

import { useMutation } from "@tanstack/react-query";

import { signInUser } from "@/server/auth.action";

export function useSignIn() {
  const { mutate, data } = useMutation({
    mutationFn: (token: string) => signInUser(token),
  });

  return { mutate, data };
}

"use client";

import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { useSignIn } from "@/hooks/useAuth";

export default function Signin() {
  const { mutate: signInUser, data: response } = useSignIn();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
    flow: "implicit",
  });

  useEffect(() => {
    if (accessToken) {
      signInUser(accessToken, {
        onSuccess: () => {
          router.replace("/");
          toast.success("Sign in successful");
        },
        onError: () => toast.error("Sign in failed"),
      });
    }
  }, [accessToken, signInUser, router]);

  useEffect(() => {
    if (response) {
      Cookies.set("auth-token", response.token, { expires: 7, secure: true });
    }
  }, [response]);

  return (
    <button
      type="button"
      className="mt-10 rounded-xl bg-white px-14 py-[10px] font-mulish font-black text-black sm:px-20"
      onClick={() => login()}
    >
      ENTER ITW UNIVERSE
    </button>
  );
}

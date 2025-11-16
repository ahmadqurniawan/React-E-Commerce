"use client"; // wajib agar bisa pakai signIn

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";

export const LoginGoogleButton = () => {
  return (
    <button
      type="button"
      onClick={() => signIn("google")}
      className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-medium py-3 px-6 rounded-sm hover:bg-blue-600 cursor-pointer"
    >
      <FaGoogle className="size-6" />
      Sign In With Google
    </button>
  );
};

"use client";

import { signIn, signOut } from "next-auth/react";

import Link from "next/link";

export function NavLinks(props) {
  const { linkName, routes, className } = props;
  return (
    <Link
      className={`${className} text-black  hover:text-amber-600 mr-10 uppercase`}
      href={routes}
    >
      {linkName}
    </Link>
  );
}

export function AuthLinks({ logType, className }) {
  return (
    <button
      onClick={() => (logType === "signIn" ? signIn() : signOut())}
      type="button"
      className={`${className} mr-20 py-2 px-4 rounded-full inline-block text-xs leading-none border text-amber-600 border-amber-600 hover:border-blue-500 hover:text-blue-500 lg:mt-0 uppercase`}
    >
      {logType === "signIn" ? "Sign In" : "Log Out"}
    </button>
  );
}

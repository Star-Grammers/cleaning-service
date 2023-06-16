"use client";

import Image from "next/image";
import { useContext } from "react";
import { NavLinks, AuthLinks } from "../NavbarLinks";
import { ProviderContext } from "../../store/Provider";

export default function UserNavbar({ role, children }) {
  const session = useContext(ProviderContext);
  return (
    <div>
      <nav className="flex text-center justify-center flex-wrap bg-white p-6 w-full sm:text-center">
        <div className="flex items-center flex-shrink-0 text-black ml-20">
          <Image
            className="h-auto max-w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMa_ejoJ9e83tZy_eNSsHMbr9FY1msrMEWmw&usqp=CAU"
            alt="image description"
            width="40"
            height="40"
          />
          <span className="font-semibold text-xl tracking-tight">
            ManosYManos
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            type="button"
            className="flex items-center px-3 py-2 border rounded text-black-200 border-black-500 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-xs lg:flex-grow block lg:inline-block lg:mt-0 -scroll-ml-72 text-center">
            <NavLinks linkName="home" routes="/" />
            {role === "user" && (
              <>
                <NavLinks linkName="about" routes="/about" />
                {!session && (
                  <NavLinks
                    className="pointer-events-none"
                    linkName="pricing"
                    routes="/pricing"
                  />
                )}
                {session && <NavLinks linkName="pricing" routes="/pricing" />}
                <NavLinks linkName="services" routes="/services" />
                <NavLinks linkName="contact" routes="/contact" />
              </>
            )}
            {role === "admin" && (
              <>
                <NavLinks linkName="clients" routes="/clients" />
                <NavLinks linkName="Employees Calendar" routes="/pricing" />
              </>
            )}
          </div>
          <div>
            {!session && <AuthLinks logType="signIn" />}
            {session && (
              <div className="flex">
                <div className="text-black text-xl">
                  Welcome {session?.user?.name}
                </div>
                <AuthLinks logType="signOut" />
              </div>
            )}
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

"use client";

import { createContext } from "react";

export const ProviderContext = createContext(null);

export default function Provider({ session, children }) {
  return (
    <ProviderContext.Provider value={session}>
      {children}
    </ProviderContext.Provider>
  );
}

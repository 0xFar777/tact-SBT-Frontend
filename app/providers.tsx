"use client"

import * as React from "react"
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl="https://file123456.4everland.store/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
 )
}

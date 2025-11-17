import { ReactNode } from "react";

import { AppShell } from "@mantine/core";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AppShell>
      <Navbar children={children} />
    </AppShell>
  );
}

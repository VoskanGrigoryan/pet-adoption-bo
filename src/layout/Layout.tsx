"use client";

import { ReactNode } from "react";
import {
  IconDog,
  IconLogout,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import { AppShell, Group, Text, Title } from "@mantine/core";
import classes from "./Layout.module.css";

const data = [
  { link: "", label: "Perfil", icon: IconUserCircle },
  { link: "", label: "Mascotas", icon: IconDog },
  { link: "", label: "Ajustes", icon: IconSettings },
];

export default function Layout({ children }: { children: ReactNode }) {
  const links = data.map((item) => (
    <a
      className={classes.link}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <Text>{item.label}</Text>
    </a>
  ));

  return (
    <AppShell>
      <AppShell.Navbar style={{ border: "none" }}>
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Group className={classes.navTitle}>
              <Title className={classes.title}>Backoffice</Title>
            </Group>
            {links}
          </div>

          <div className={classes.footer}>
            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <Text>Cerrar sesion</Text>
            </a>
          </div>
        </nav>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

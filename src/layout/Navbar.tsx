"use client";

import {
  AppShell,
  Center,
  Stack,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Layout.module.css";
import {
  IconDog,
  IconSettings,
  IconUserCircle,
  IconLogout,
} from "@tabler/icons-react";
import { ReactNode, useState } from "react";

interface NavbarLinkProps {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const data = [
  { icon: IconDog, label: "Mascotas" },
  { icon: IconUserCircle, label: "Perfil" },
  { icon: IconSettings, label: "Ajustes" },
];

const Navbar = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState(0);

  const links = data.map((item, index) => (
    <NavbarLink
      {...item}
      key={item.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <>
      <AppShell.Navbar style={{ border: "none" }}>
        <nav className={classes.navbar}>
          <Center>
            <MantineLogo type="mark" inverted size={30} />
          </Center>

          <div className={classes.navbarMain}>
            <Stack justify="center" gap={0}>
              {links}
            </Stack>
          </div>

          <Stack justify="center" gap={0}>
            <NavbarLink icon={IconLogout} label="Cerrar sesión" />
          </Stack>
        </nav>
      </AppShell.Navbar>
      <AppShell.Main className={classes.mainBody}>{children}</AppShell.Main>
    </>
  );
};

export default Navbar;

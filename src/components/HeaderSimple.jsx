import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Transition,
  Text,
  Image,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import classes from "../styles/HeaderSimple.module.css";
import { useLocation } from "react-router-dom";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/help-us", label: "Help Us" },
];

const HeaderSimple = () => {
  const [opened, setOpened] = useState(false);

  const location = useLocation();

  //console.log(location.pathname);
  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={location.pathname === link.link || undefined}
    >
      {link.label}
    </a>
  ));

  //* Burada MantineLogo yerine simdilik yazi yazacaz.
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text size={30} c="green" ff="Martian Mono, sans-serif">
          DOCKER FUCKER
        </Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={() => {
            setOpened(!opened);
          }}
          hiddenFrom="xs"
          size="sm"
        >
          <Transition
            mounted={opened}
            transition="scale-x"
            duration={400}
            timingFunction="ease"
          >
            {styles => (
              <Group style={styles} className={classes.navList}>
                {items}
              </Group>
            )}
          </Transition>
        </Burger>
      </Container>
    </header>
  );
};

export default HeaderSimple;

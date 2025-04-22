"use client";

import {
  //useMantineColorScheme,
  Group,
  // UnstyledButton,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Container,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/headerStyle.module.css';
import Link from 'next/link';
// import ThemeButton from './ThemeButton';
// import { IconSun, IconMoon } from '@tabler/icons-react';


export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  //const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  //const dark = colorScheme === 'dark';

 

  return (
    <Container fluid p={0}>
      <Box pb={0}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
          <Text fw={700} fz={20}><Link className={classes.customLink} href={"/"}>Scary Aisle</Link></Text>
            <Group h="100%" gap={0} visibleFrom="sm">

              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/stories/" className={classes.link}>
                Stories
              </Link>
              <Link href="/about/" className={classes.link}>
                About
              </Link>

              {/* <ThemeButton /> */}
            </Group>


            <Burger aria-label='toggle menu' opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Scary Aisle"
          hiddenFrom="sm"
          zIndex={1000000}
        >
            
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <Link href="/" className={classes.link} onClick={closeDrawer}>
              Home
            </Link>

            <Link href="/stories/" className={classes.link} onClick={closeDrawer}>
              Stories
            </Link>
            <Link href="/about/" className={classes.link} onClick={closeDrawer}>
              About
            </Link>

            <Divider my="sm" />
            {/* <UnstyledButton
              className={classes.link}
              variant='outline'
              color={dark ? 'light' : 'yellow'}
              onClick={() => toggleColorScheme()}
              title='Toggle color scheme'
            > Change theme
              {dark ? (<IconSun />) : (<IconMoon />)}
            </UnstyledButton> */}

          </ScrollArea>
        </Drawer>
      </Box>
    </Container>
  );
}
import { Container, Group, Text } from '@mantine/core';
import Link from 'next/link';
import classes from '../styles/footerStyle.module.css';

const links = [
  { path: '/', label: 'Home' },
  { path: '/stories/', label: 'Stories' },
  { path: '/about/', label: 'About' },
  { path: '/terms-and-conditions/', label: 'Terms & Conditions' },
  { path: '/privacy-policy/', label: 'Privacy Policy' },
];

export function Footer() {
  const items = links.map((link) => (
    <Link href={link.path} key={link.label} className={classes.customLink}>
      {link.label}
    </Link>
  ));

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Text fw={600} fz={20}>Scary Aisle</Text>
        <Group fz={14} color='dark' className={classes.links}>{items}</Group>
      </Container>
    </footer>
  );
}

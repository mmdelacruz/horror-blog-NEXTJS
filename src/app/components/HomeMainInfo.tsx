import { Container, Text, Title, Group } from '@mantine/core';
import classes from '../styles/homeMainInfo.module.css';
import Link from 'next/link';

export function HomeMainInfo() {
  return (
    <div className={classes.wrapper}>
      <Container pt={30} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'yellow' }} inherit>
            Scary Aisle:
          </Text>{' '}
          where you can find the scariest stories to read at night.
        </h1>

        <Title fw={'normal'} order={2} className={classes.description}>
          You are about to discover a different experience. Turn your lights off, embrace the unknown, and get ready to join our characters in the different stories.   
        </Title>

        
          <Group className={classes.controls}>
          <Link href={"/stories/"} className={classes.control}>
            Explore Stories
          </Link>

        <Link href={"/about/"} className={classes.controlAbout}>
          About
        </Link>
      </Group>
    </Container>
    </div >
  );
}
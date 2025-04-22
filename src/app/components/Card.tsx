"use client";
import { Paper, Title, Button } from '@mantine/core';
import classes from '../styles/cardStyle.module.css';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  backgroundImage: string | StaticImageData;
  id: number;
  url: string;
}

export function Card({ backgroundImage, title, id, url }: CardProps) {
  const cardStyle = {
    backgroundImage: `url(${(backgroundImage as StaticImageData).src})`,
  };

  return (

    <Paper h={200} shadow="md" p="md" radius="md" className={classes.card} style={cardStyle}>

      <div>

        <Title ps={5} pe={5} className={classes.title} order={3}>
          {title}
        </Title>

      </div>
      <Link href={`/stories/${url}`} className={classes.btn}>
        Read Story
      </Link>

    </Paper>
  );
}
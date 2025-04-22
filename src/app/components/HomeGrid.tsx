"use client";
import { Grid, Container } from '@mantine/core';
import { Card } from './Card';
import { cardsData, CardData } from './CardData';

export function HomeGrid() {

  const firstFourCards = cardsData.slice(0, 4);

  return (
    <Container my="md">
      <Grid>
        {firstFourCards.map((card) => (
          <Grid.Col key={card.id} span={{ base: 12, xs: 6 }}>
            <Card
              id={card.id}
              title={card.title}
              backgroundImage={card.backgroundImage}
              url={card.url}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

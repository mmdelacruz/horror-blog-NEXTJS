'use client';

import React from 'react'
import { Card } from './Card';
import img from '../../../public/img/asd.jpg';
import { Divider, Center, Title, Group, Text, Grid, Container } from '@mantine/core'
import { StaticImageData } from 'next/image';

interface StoryProps {
    id: number;
    title: string;
    backgroundImage: string | StaticImageData;
    url: string;
  }

  const Recommendation = (props: { story1: StoryProps; story2: StoryProps }) => {
    const { story1, story2 } = props;
    return (
        <>
            <article>
                <Container>
                    <Divider mt={50} />

                    <Center>
                        <Title order={2} p={30} fw={700} fz={20} ta={"center"}>Enjoyed this story? Experience real horror with the following:</Title>
                    </Center>


                        <section>
                    <Grid>
                            <Grid.Col span={{ base: 12, xs: 6 }}>
                                <Card
                                    id={props.story1.id}
                                    title={props.story1.title}
                                    backgroundImage={props.story1.backgroundImage}
                                    url={props.story1.url}
                                />
                            </Grid.Col>


                            <Grid.Col span={{ base: 12, xs: 6 }}>
                                <Card
                                    id={props.story2.id}
                                    title={props.story2.title}
                                    backgroundImage={props.story2.backgroundImage}
                                    url={props.story2.url}
                                />
                            </Grid.Col>
                        
                    </Grid>
                    </section>
                </Container>
            </article>
        </>
    )
}

export default Recommendation
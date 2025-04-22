'use client';

import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, Container, Pagination, Title } from '@mantine/core';
import { Card } from './Card';
import { Center } from '@mantine/core';
import { cardsData, CardData } from './CardData';
import Head from 'next/head';

const chunk = <T,>(array: T[], size: number): T[][] => {
    const chunkedArr: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
};



const AllStories = () => {
    const [activePage, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [data, setData] = useState<CardData[][]>(chunk(cardsData, itemsPerPage));
    const [paginationSize, setPaginationSize] = useState("");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) { // xs
                setItemsPerPage(3);
                setPaginationSize("md");
            } else if (window.innerWidth < 1200) { // md
                setItemsPerPage(6);
                setPaginationSize("lg");
            } else { // lg and above
                setItemsPerPage(9);
                setPaginationSize("xl");
            }
        };

        // Set initial value based on current window size
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Re-chunk data whenever itemsPerPage changes
    useEffect(() => {
        setData(chunk(cardsData, itemsPerPage));
        setPage(1); // Reset to first page on itemsPerPage change
    }, [itemsPerPage]);

    // Elementos a mostrar en la página activa
    const items = data[activePage - 1]?.map((item) => (
        <Grid.Col key={item.id} span={{ base: 12, xs: 6, lg: 4 }}>
            <Card id={item.id} title={item.title} backgroundImage={item.backgroundImage} url={item.url} />
        </Grid.Col>
    )) || [];

    return (
        <>
            <Head>
                <title>Stories - Scary Aisle</title>
                <meta name="description" content="Find the scariest stories that will keep you awake at night. Discover original writings that describe the unsettling and horrific world of the unknown." />
                <meta name='keywords' content='scary, stories, horror, creepy, original, browse, find, online' />
            </Head>
            <Container my="md">
                <Box mb={100}>
                    <Center>
                        <Title fz={60} fw={700} mb={40}>
                            Stories
                        </Title>
                    </Center>

                    <Text fs={"italic"} size='lg' fw={400}>
                        In the quiet places of our world, where only shadows can be seen and only whispers can be heard, you can find a room where fears and nightmares wait for you. In the quiet night, it&apos;s when you notice that in the darkness, there are things beyond comprehension, waiting patiently to be discovered...
                    </Text>
                </Box>

                <Grid>
                    {items}
                </Grid>
                <Center>
                    <Pagination color='orange' size={paginationSize} total={data.length} value={activePage} onChange={setPage} mt="sm" />
                </Center>
            </Container>
        </>
    );
}

export default AllStories;

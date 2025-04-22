import { Title, Text, Container, Center } from '@mantine/core'
import darkAisleImg from '../../../public/img/dark-aisle.jpg';
import Image from 'next/image';
import classes from './style.module.css';

export const metadata = {
    title: 'Scary Aisle - About',
    description: 'In our website, you can find really scary stories to read at night, just before going to bed.',
    keywords: 'scary, stories, night, about, scary stories to read at night',
    alternates: {
        canonical: 'https://www.scaryaisle.com/about/',
      },
  };

const About = () => {
    return (
        <>
            <Container>
                <Center>
                    <Title mt={30} mb={30} order={1}>About</Title>
                </Center>
                <Text mb={20} size='xl'>
                    Welcome to the
                    <Text component='span'>{' '}</Text>
                    <Text fw={900} component="span" variant="gradient" gradient={{ from: 'red', to: 'yellow' }} inherit>
                        Scary Aisle.
                    </Text>{' '}
                    There is a high chance that you enjoy the horror genre as much as we do. That is why we want to create an immersive and thrilling experience for you. Our main goal is to build a scary environment, and keep you focused on the sensations of the unknown.
                </Text>

                <Text mb={20} size='xl'>
                    At the Scary Aisle, we really enjoy all the things that horror provides. From psychological mysteries to stories inspired by real events, our content aims to send shivers down your spine and make your heart beat fast. We believe that horror is more than just a genre; it&apos;s an experience with the ability to make us curious about what we might not always see.
                </Text>

                <Center>
                    <Image
                        className={classes.img}
                        src={darkAisleImg}
                        alt='text'
                    />
                </Center>

                <Text size='xl' mt={20}>
                    Join us in this journey, and try to see beyond darkness. Whether you&apos;re here to read short but unsettling stories, or to discover a way of escaping the reality, we are here to ensure your experience is more than scary.
                </Text>
            </Container>
        </>
    )
}

export default About
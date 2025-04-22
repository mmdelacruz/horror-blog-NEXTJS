import React from 'react';
import dontWachtItImg from '../../../../public/img/dont-watch-it-story.jpg';
import turnAroundImg from '../../../../public/img/turn-around.jpg';
import doNotEnterImg from '../../../../public/img/do-not-enter.jpg';
import { Container, Text, Center, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './style.module.css';
import Link from 'next/link';
import Recommendation from '@/app/components/Recommendation';

export const metadata = {
    title: "Don't Watch It: A Scary Bedtime Story That Will Keep You Awake - Scary Aisle",
    description: 'You will have a hard time trying to get to sleep at night with this scary story. What could go wrong on a simple visit to the movie-theater?',
    keywords: 'scary, story, bedtime, awake, cinema, horror',
    alternates: {
        canonical: 'https://www.scaryaisle.com/stories/dont-watch-it/',
    },
};

const story1 = {
    id: 2,
    title: "Turn Around",
    backgroundImage: turnAroundImg,
    url: 'turn-around/',
}

const story2 = {
    id: 3,
    title: "Do Not Enter",
    backgroundImage: doNotEnterImg,
    url: 'do-not-enter/',
}

const DontWatchIt = () => {
    return (
        <>
            <main>
                <article>
                    <Container>
                        <Title pt={50} pb={50} fw={900} fz={35} ta={"center"}>Don’t Watch It: A Scary Bedtime Story That Will Keep You Awake</Title>
                        <section>
                            <Text className={classes.notIA} fs={'italic'} fw='bold' fz={15} ps={30} ta={"start"}>This horror story was written by a human, not by AI.</Text>
                            <Text fz={20} p={30} ta={"start"}>
                                Moving to a completely new place is always overwhelming. However, everything is a bit more difficult if you are moving to a kind of isolated place. Despite the setbacks, everything went well and he was already settled in. One of the things he enjoyed the most was going to the movie theater and dive deep into a horror film. It was very fortunate that the new place had a movie theater available for the people living nearby.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                A rainy Saturday evening, a new horror movie was being released so he decided to give it a try. As usual, he would search for information on the internet about this scary story but could not find anything. He could not even find the trailer of the movie he was about to watch.  At this point, he was very curious about the movie and why it had no information.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                After driving for fifteen minutes in the rain, he parked the car and entered the cinema at the sound of a thunderclap. The place was full of people, as apparently there were two more movies being released that day, which had a lot more fans. He got closer to the reception and asked for a single ticket for the movie. When the girl on the ticket counter heard what he asked for, her smile vanished from her face, the unsettling face someone will have after reading a horrendous story. Scared about the reaction, he took the ticket and decided to wait some minutes until the movie started.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                With popcorn and something to drink in hand, he went to take a seat at the room where the movie was going to be played soon. The usual commercials started playing and he began eating the delicious popcorn. After a few minutes, the commercials stopped and the movie started. At this point, he realized something was not right. There was actually nobody except from him in the room. It made no sense at all, the reception was full of people buying tickets, there must be at least one other person who would buy tickets for the horror movie. Intrigued about the situation, mixed with some strange anxiety, he tried to remain calmed, ready to go through the whole movie. The fact that it was a horror one did not help much. He would probably have a bad time afterwards, on bedtime. Surely, it will keep him awake the whole night. Despite all this, he was enjoying it a lot.
                            </Text>
                        </section>
                        <Center>
                            <Image
                                className={classes.img}
                                alt='A dark silhouette in a white background. For some reason, it seems trapped'
                                src={dontWachtItImg} />
                        </Center>

                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                The movie was about a group of friends playing a particular game in the forest. The game itself was called <Link href='../turn-around/' className={classes.link}>‘Turn Around’.</Link> The concept of the game and the fact it was played in the woods, created a very unsettling environment which was very much enjoyable. Something he also liked was the absence of jumpscares, good horror movies do not have them, at least for him. Once the movie finished and the credits were about to start, the tape suddenly stopped. As if someone has intentionally stopped the film. He went down the stairs and dropped the remaining popcorn and drink on the basket. To his surprise, nobody was waiting for him at the door, so he took the initiative and opened the exit door on his own.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Several minutes passed, and he could not find any single person in the whole movie theater. He searched in the reception, in the bathrooms, in every single room where movies could be played. No one. All lights were off, except for the lights of the street that illuminated a bit the scary reception. At this moment, the flashlight of his phone was his best friend. He also tried to make a call to the emergency number, but there was no signal. Horrified and anxious about what was happening, he started crying, but not out of fear, but from the unsettling scenery and situation he ended up involved in.
                                Despite that he was feeling extremely scared, he had millions of questions in his head. He had no clue about what was going on.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                In total desperation, he took a chair from the reception and hit one of the windows as hard as possible. Unfortunately, it did not break. He tried again many times but got the same result. Now he was exhausted and the fear kept on rising. All exit doors from the cinema were locked, and apparently all windows were unbreakable. He was trapped, scared and alone.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Everything changed when he heard some music coming from one of the rooms. It seemed that a movie was playing. Full of hope, he stood up with strength, and ran to the source of the music. At the door, there was a sign with the title of the movie: ‘The scary story of the forever-trapped man’. At this point, with watering eyes, hopeless, the man opened the door and took a seat. Popcorn and a drink were waiting for him. He understood now. He watched the movie, it was good, at least he thought that after seeing that the main character looked like him.
                            </Text>
                        </section>
                    </Container>
                </article>
                <Recommendation story1={story1} story2={story2} />
            </main>
        </>
    );
};

export default DontWatchIt;

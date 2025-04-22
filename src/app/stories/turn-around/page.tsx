
import React from 'react';
import oldCabinImg from '../../../../public/img/turn-around-story.jpg';
import { Container, Text, Center, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './style.module.css';
import openYourEyesImg from '../../../../public/img/window-shadow.jpg'
import dontWatchItImg from '../../../../public/img/dont-watch-it-card.jpg'
import Recommendation from '@/app/components/Recommendation';

export const metadata = {
    title: 'Turn Around: A Horror Forest Game - Scary Aisle',
    description: 'A simple game in the forest can quickly turn into something obscure and dangerous. This is the horror experience that a group of friends had to face.',
    keywords: 'scary, story, night, experience, horror, woods, forest, friends',
    alternates: {
        canonical: 'https://www.scaryaisle.com/stories/turn-around/',
    },
};

const story1 = {
    id: 5,
    title: "Don't Watch It",
    backgroundImage: dontWatchItImg,
    url: 'dont-watch-it/',
}

const story2 = {
    id: 1,
    title: "Open Your Eyes",
    backgroundImage: openYourEyesImg,
    url: 'open-your-eyes/',
}




const TurnAround = () => {
    return (
        <>
            <main>
                <article>
                    <Container>
                        <Title p={50} fw={900} fz={45} ta={"center"}>Turn Around: A Horror Forest Game</Title>
                        <section>
                            <Text className={classes.notIA} fs={'italic'} fw='bold' fz={15} ps={30} ta={"start"}>This horror story was written by a human, not by AI.</Text>
                            <Text fz={20} p={30} ta={"start"}>One, two, three, turn around!</Text>
                            <Text fz={20} p={30} ta={"start"}>One, two, three, turn around!</Text>
                            <Text fz={20} p={30} ta={"start"}>One, two, three, turn around!</Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>A young girl used to play this with her friends. It was fun and very easy to play. The rules were simple: face the forest, count to three, turn around and see who could move the fastest without being noticed. They really enjoyed the thrill, the laughter, and their friendship. However, something about that game felt a bit different on this particular evening.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>The girl and her friends met each other near the edge of the forest, as they usually did. The sun was setting, long shadows were appearing, which made the trees look like giants. The game began, and they were laughing and teasing each other. But with every turn, something seemed off.  Something they haven&apos;t noticed before. The trees appeared to be closer, their branches reaching out like skinny hands.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>&quot;Did you see that?&quot; one of the kids whispered, his voice trembling as they completed another round. &quot;The trees... they&apos;re moving.&quot;
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>&quot;You&apos;re imagining things. Stop with that&quot; the others said, trying to sound brave but failing to hide the anxiousness in their voices. &quot;It&apos;s just a trick of the light.&quot;
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}> They resumed their game, but the atmosphere was thicker with each turn. The forest seemed so close around them, the air was getting denser with an evident sense of dread. The sky got dark unnaturally fast, and a cold breeze gave them goosebumps.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>One, two, three, turn around!</Text>

                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Kid&apos;s hearts were beating fast in their chests. The forest was getting closer, the trees were no longer just inanimate objects. The bark of the trees twisted into horrendous faces, eyes forming out of the wood grain, as if they were watching them. They could hear inaudible whispers, almost like a song, calling out their names, inviting them deeper into the woods.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>&quot;Let&apos;s stop&quot; one of the friends suggested, with an extremely pale face.
                                &quot;This is not funny anymore.&quot;
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>However, as they turned to leave, they noticed how the path back home had vanished. The forest had swallowed it, leaving only a dense wall of trees and grass behind them. Panic was the only thing they could feel. They got closer to each other to protect themselves from the unknown. Their breaths were the only thing that could be heard.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>One, two, three, turn around!</Text>

                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>The sound grew louder, more insistent and scary. The whispers turned into voices. Each voice calling for one of the kids, making them go deeper into the darkness. The young girl felt something cold against her arm and screamed. The others joined in, and their voices merged into a single scream of hopelessness and horror. The woods keeped calling the kids. The voices were coming from all directions, as if the forest itself was alive and hungry.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Without ideas, they began to run, as fast as possible, stumbling through the underbrush, stepping on roots and branches. The trees seemed even more close at this point, their branches ripping their clothes, the whispering growing louder, more alarming.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>&quot;Hey, look!&quot; a kid pointed ahead, his voice was a mix of hope and fear.
                            </Text>

                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>A clearing appeared in front of them, shrouded in a scary pale light. In the center they saw an old, ruined cabin, its windows were dark and cracked. Desperation drove them there, looking for a safe place, far away from the forest.
                            </Text>
                        </section>
                        <Center>
                            <Image
                                className={classes.img}
                                alt='A small wooden cabin in the middle of the foggy forest.'
                                src={oldCabinImg} />
                        </Center>

                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>They opened the door with strength, and closed it fast behind them. The cabin was cold and musty, filled with a particular smell. Smell of rot. In the middle of the room, there was a little candle on a wooden table, making shadows move on the walls. The whispers followed them inside, they kept getting louder, almost as if the walls themselves were speaking. The atmosphere inside the cabin got colder, which made the kids see their breath.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>&quot;One, two, three, turn around!&quot; The chant sounded inside the cabin, the voices were similar to humans, full of hunger.
                            </Text>

                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>&quot;We need to get out of here. Now!&quot; one of the kids screamed thinking that they might be still in danger.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>But before they could move, a cold breeze turned off the candle. The only source of light. Everything went dark. They could feel the presence of something ancient and evil, very close to them. The voices were now screams, and they felt even more cold, until they were absorbed by the shadows.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>One, two, three, turn around...
                            </Text>

                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>The last thing they saw before the darkness consumed them was the twisted faces of the trees outside the window, waiting, watching, whispering, claiming. They could finally feel peace. They were happy now, as they knew the game would go on. Forever. And as the night swallowed the cabin, the whispers continued through the trees, calling out to any who dared to play their game.
                            </Text>

                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>One, two, three, turn around...</Text>
                        </section>
                    </Container>
                </article>
                <Recommendation story1={story1} story2={story2} />
            </main>
        </>
    );
};

export default TurnAround;
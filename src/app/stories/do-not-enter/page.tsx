import React from 'react';
import roomImg from '../../../../public/img/do-not-enter-story.jpg';
import turnAroundImg from '../../../../public/img/turn-around.jpg';
import dontWatchItImg from '../../../../public/img/dont-watch-it-card.jpg';
import { Container, Text, Center, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './style.module.css';
import Recommendation from '@/app/components/Recommendation';

export const metadata = {
    title: 'Do Not Enter: A Horror Loop - Scary Aisle',
    description: 'The horryfing and frightening story about a never-ending loop. Understand how sometimes we are our own saviors even without noticing.',
    keywords: 'horror, creepy, story, store, loop, trapped, experience',
    alternates: {
        canonical: 'https://www.scaryaisle.com/stories/do-not-enter/',
    },
};


const story1 = {
    id: 2,
    title: "Turn Around",
    backgroundImage: turnAroundImg,
    url: 'turn-around/',
}

const story2 = {
    id: 5,
    title: "Don't Watch It",
    backgroundImage: dontWatchItImg,
    url: 'dont-watch-it/',
}



const DoNotEnter = () => {
    return (
        <>
            <main>
                <article>
                    <Container>
                        <Title p={50} fw={900} fz={45} ta={"center"}>Do Not Enter: A Horror Loop</Title>
                        <section>
                            <Text className={classes.notIA} fs={'italic'} fw='bold' fz={15} ps={30} ta={"start"}>This horror story was written by a human, not by AI.</Text>
                            <Text fz={20} p={30} ta={"start"}>
                                Emma was very excited about moving to a small city. Finally a fresh start. She had left the complicated city life behind for a slower and more peaceful existence. She was in love with her new home, a stylish place, with its brick walls and a small garden that painted the ambience with colorful flowers. The town seemed very charming, with its short streets, some friendly neighbors, and a sense of community she had always looked for.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                One evening, as the disappearing sun was creating a golden glow over the town, Emma noticed that the kitchen bulb was flickering with intensity. With a sudden pop, the bulb finally died. The kitchen is now dark. Unwillingly, she grabbed her coat and headed out to find a replacement.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                As a small city, the only store still open was a little shop a few blocks away, a bit lost between a bakery and a few offices. It was an old-fashioned place, with a bell above the door that rang loud as she entered. The shelves were full of items, from canned goods to hardware supplies without particular order.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                &quot;Hello?&quot; Emma said, but there was no response. The store was very silent, the only thing that could be heard was the sound of her footsteps stepping on the wooden floor. Her gut feeling was screaming to leave, but she didn&apos;t pay attention. Clearly, the unsettling sensation was due to the unusual quiet.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                She wandered the scary aisle, looking for the lightbulbs. As she reached the back of the store, she suddenly heard an almost inaudible but desperate whisper, &quot;Do not enter.&quot;
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Emma froze, her heart was beating fast in her chest. She looked around but could find no one. She called out again, but louder this time, &quot;Hello? Is anyone here?&quot;
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Silence…
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Her curiosity raised, Emma decided to investigate further. She was sure that there must be a logical explanation for the situation. She walked deeper into the store, while the dim lighting created creepy figures out of the shadows. At the end of the store, she found a door, slightly ajar. She hesitated for a moment, recalling the whisper, but her need for a lightbulb – and perhaps a bit of adventure and curiosity – made her go forward.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Emma opened the door and got inside. It was a small, dark room, full of thickness in the air with an old, musty smell. As soon as she was inside, the door slammed shut behind her with a force that made her fall. She tried to open it, but it was locked very tight. The panic she started feeling could not be described. Emma kicked on the door several times, shouting for help with all her strength, but no one came.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Silence…
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                A couple hours passed in the darkness but Emma did not know how much time really passed. At this point, her fear ate her completely. She sat down on the floor, putting her back against the cold door, trying to calm her thoughts. Then, she heard it – the sound of the bell ringing as if someone had entered the store.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Emma quickly stood up, trying to hear any voice coming out of the room she was trapped in. She could barely hear anything and without hesitation, she started to scream.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                “I’m trapped here. Help!” she screamed with all her strength. But it seemed she could not be heard. She tried a few more times without success. Defeated, she let her own weight fall to the ground and started crying. It seemed impossible to escape from that place.
                            </Text>
                        </section>
                        <Center>
                            <Image
                                className={classes.img}
                                alt='A dark silhouette in a white background. For some reason, it seems trapped'
                                src={roomImg} />
                        </Center>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                &quot;Hello?&quot; Emma heard from outside the room. The voice sounded familiar. It was clearly from a woman who had just entered the store. And then, silence. At this point, Emma tried one more time to scream for help. And once again, nothing.
                                &quot;Hello? Is anyone here?&quot; said the mysterious woman. Something seemed off. Something was wrong. Emma felt a deep hole in her stomach and it was at this particular moment when she realized. The person who had just entered the store was her.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Without thinking too much, Emma started shouting with all her heart. “DO NOT ENTER!”, again and again. The footsteps were getting closer every second.
                                “DO NOT ENTER!” Emma kept screaming. But it seemed in vain.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                “DO NOT ENTER!”
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                “DO NOT ENTER!”
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                And the door opened.
                            </Text>
                        </section>
                    </Container>
                </article>
                <Recommendation story1={story1} story2={story2} />
            </main>
        </>
    );
};

export default DoNotEnter;

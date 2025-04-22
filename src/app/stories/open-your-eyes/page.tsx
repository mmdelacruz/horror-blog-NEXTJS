import React from 'react';
import eyeImg from '../../../../public/img/eye-crack.jpg';
import { Container, Text, Center, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './style.module.css';
import doNotEnterImg from '../../../../public/img/do-not-enter.jpg';
import theCallImg from '../../../../public/img/the-call.jpg';
import Recommendation from '@/app/components/Recommendation';

export const metadata = {
    title: 'Open Your Eyes: Haunted Vision - Scary Aisle',
    description: 'The scary and unsettling story of a man who got eye surgery and not only got his sight back, but also the ability to see the unknown.',
    keywords: 'scary, horror, story, eye, surgery, creepy, doctor, vision',
    alternates: {
        canonical: 'https://www.scaryaisle.com/stories/open-your-eyes/',
    },
};

const story1 = {
    id: 3,
    title: "Do Not Enter",
    backgroundImage: doNotEnterImg,
    url: 'do-not-enter/',
}

const story2 = {
    id: 4,
    title: "The Call",
    backgroundImage: theCallImg,
    url: 'the-call/',
}


const OpenYourEyes = () => {
    return (
        <>
            <main>
                <article>
                    <Container>

                        <Title p={50} fw={900} fz={45} ta={"center"}>Open Your Eyes: Haunted Vision</Title>
                        <section>
                            <Text className={classes.notIA} fs={'italic'} fw='bold' fz={15} ps={30} ta={"start"}>This horror story was written by a human, not by AI.</Text>
                            <Text fz={20} p={30} ta={"start"}>Mark used to live in the outer part of a small city, in what we would consider a quiet place. Not many neighbours, not many stores and little traffic to none. All his entire life has been a loner, but not in a bad way. Mark was very pleased with the life he had but some unfortunate events made her parents die in a car crash when he was young. He was raised by his grandfather until his late teens, when the old man passed away. All these tragic events made Mark stronger, and he found peace being alone, no attachments to anything. Despite the setbacks in life, Mark could finish college and get a good job in a big company.</Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Mark loved his house. It was inherited after his grandfather died. It was big for only one person, but he worked hard to maintain it in a proper way. One afternoon, while cutting the grass in the backyard, something got inside Mark’s eyes, making him feel a sharp object inside them. He could barely walk some meters to get to the nearest house available.  His neighbours called the emergency number and he was taken to a hospital in the city.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Mark needed to get surgery, not only in one, but in both eyes. He was petrified with such news. He is one of those who hardly ever gets sick. Never been in the hospital, as far as he remembered. Fortunately, the doctors confirmed that his sight was not compromised, and a simple surgery was needed to be performed. The day arrived, and Mark was very scared about the whole thing, but there was no turning back now.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>The anesthesia kicked in. While asleep, he could remember some people talking, maybe the doctors in the room. Also he could feel some movement in his eyes, probably the doctors working. This movement made him try to open them as much as possible despite him knowing it was not a good idea. After minutes of big effort, Mark opened both eyes. The room was full of people, not only the doctors, but kids and older people. They were all looking at him, directly to his eyes, without blinking. Mark was also hearing inaudible whispering which little by little made him more anxious. He could not stand it anymore, and everything went black.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Wind and bird sounds woke him up. His head was throbbing as he tried to open his eyes again. To his surprise, he was in his house. It made no sense for Mark, as he was supposed to be in the hospital. He had just left the operating room, he must be in the hospital. Once he got to the nearest mirror, there were no signs of damage in his eyes which made him even more unsettled. He called the hospital and was taken aback about the fact that they confirmed he has not been hospitalized recently. In denial about what was happening, he went to his neighbours house to ask them what’s wrong. Unfortunately, they confirmed they haven’t called the emergency number for him, which made Mark even more scared.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Days passed and life went back to normal until one night Mark found a crack in one of the walls in his house. It was strange that he did not notice before, as it looked as if it had been there for ages. There was light coming out of the wall and when he got closer to check, some kind of door could be seen in the distance. With no hesitation, he grabbed a hammer and started breaking the wall. The crack was now a full hole, with enough room for a person to go through. Mark could see a long corridor with a door at the end. As he was getting closer to the door, a putrid odor hit his nose. The door was not locked, and Mark got inside. The smell was unbearable and there was little to none light, which made Mark wait a bit until his eyes got used to it. However, he would have preferred not to see what he was about to see.
                            </Text>
                        </section>
                        <Center>
                            <Image
                                className={classes.img}
                                alt='The brown eye of a person looking through a crack on a wall. Light is hitting directly the eye.'
                                src={eyeImg} />
                        </Center>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>A kid, a man and an old lady. Standing in front of him. Staring at him without blinking. Making no sound at all. Mark didn’t move. Mark didn’t make any sound.
                                As his eyes were more comfortable with the darkness, he could see the kid bleeding from his nose, the man was holding his teeth on their hands while the old lady started to take her nails off. With a voice full of suffering, the elder explained to Mark how the kid and the man died in the car crash where his parents also died. The mother of the kid and the wife of that man was left with nothing. Slowly getting in the darkness, with no way out. This mother and wife lived for ages in pain, without the company of her beloved son and husband and today was the day she passed away. Today was the day she could share her sorrow. Today she is reunited with her family. She is now free.
                            </Text>
                        </section>
                    </Container>
                </article>
                <Recommendation story1={story1} story2={story2} />
            </main>
        </>
    );
};

export default OpenYourEyes;

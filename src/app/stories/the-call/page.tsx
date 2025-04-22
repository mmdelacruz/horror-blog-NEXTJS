import React from 'react';
import ouijaImg from '../../../../public/img/the-call-story.jpg'
import { Container, Text, Center, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './style.module.css';
import openYourEyesImg from '../../../../public/img/window-shadow.jpg'
import dontWatchItImg from '../../../../public/img/dont-watch-it-card.jpg'
import Recommendation from '@/app/components/Recommendation';

export const metadata = {
    title: 'The Call: A Terrifying Ouija Board Story - Scary Aisle',
    description: 'This Ouija board-related story will make you understand that in the darkness, there are things that are best kept as far away as possible',
    keywords: 'ouija, game, story, experience, phone, mobile, call, horror',
    alternates: {
        canonical: 'https://www.scaryaisle.com/stories/the-call/',
    },
};


const story1 = {
    id: 1,
    title: "Open Your Eyes",
    backgroundImage: openYourEyesImg,
    url: 'open-your-eyes/',
}

const story2 = {
    id: 5,
    title: "Don't Watch It",
    backgroundImage: dontWatchItImg,
    url: 'dont-watch-it/',
}

const TheCall = () => {
    return (
        <>
            <main>
                <article>
                    <Container>
                        <Title p={50} fw={900} fz={45} ta={"center"}>The Call: A Terrifying Ouija Board Story</Title>
                        <section>
                            <Text className={classes.notIA} fs={'italic'} fw='bold' fz={15} ps={30} ta={"start"}>This horror story was written by a human, not by AI.</Text>
                            <Text fz={20} p={30} ta={"start"}>
                                Nick was a teenager, had several friends and a good life in general. One day, at the end of the week, his group of friends decided to meet as they usually did on weekends. They were out of things to do, they had already done everything or at least that is what they thought. So the group of friends started brainstorming about what things or games the following weekend will bring to the table. Everything was funny, until one of the friends suggested to use the Ouija board and try to do some scary things. Even though it was not the most popular idea between them, the lack of ideas made the friends agree on playing with the Ouija board.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                The day finally arrived, and the teens gathered in the house of one of them. Between non-alcoholic drinks and some snacks the hours were passing by. Some have already made jokes about the Ouija board, but they were all extremely anxious about it. Armed with bravery, one of them grabbed the board and started with the preparation of the game. Another one was reading out loud the instructions so all the group would know the rules. All the lights were turned off except from the light of some candles they lightened to embrace the unsettling ambience.
                            </Text>
                        </section>

                        <Center>
                            <Image
                                className={classes.img}
                                alt='The Ouija Board on a table'
                                src={ouijaImg} />
                        </Center>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Nick decided not to participate in the game and will only be an observer. He was a bit superstitious about this kind of games and didn’t want to gamble this time. Despite his friends pushing him hard to take part, Nick would refuse every time.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                The teenagers started the game and sooner than later, contacted an entity from the unknown. The spirit they were talking to, seemed harmless. They asked some silly questions but nothing that could not be answered. After some minutes, the little cup on the board started to move forcefully, as if the entity was mad. The disturbed players tried to be relaxed about this sudden attitude change but it was extremely hard to do so. Some of them started to do some jokes to lighten the mood. However, when answering one of the questions, the spirit forcefully replied…
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                “B - R - I - N - G - N - I - C - K”
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                All smiles disappeared from their faces. Nick felt a very cold sensation in his back and started trembling even though he wanted to hide it. Every single question that they asked was answered by the same order. The group of friends knew it was time to stop playing. Despite the entity didn’t want at first to end the game, it finally gave in, and the game was closed. Everyone got safe to their houses and that scary night ended.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Nick was woken up by the sound of the birds. The sun was slowly heating his room as the light entered through the window. He was relieved and happy about the fact that last night the situation didn’t escalate to something worse. The smell of a good meal was coming from the kitchen and a hungry Nick stood up and got to the kitchen. His mother was preparing something for lunch time at the sound of the TV in some random sitcom.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                While eating, Nick told his mom what happened last night, and how uneasy he felt with the situation. His mom reassured him and provided comfort. They both were enjoying the delicious meal until Nick received a call on his mobile phone. It was his mom, calling him. The text “Mom” in the phone screen made Nick panic in a fraction of second.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                “Are you calling me?” Nick doubtfully asked. “I’m not doing anything Nick. I don’t even know where is my phone” his mom replied.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Mother and son began to desperately look for the phone, as if it were going to answer all the questions they have. Ten minutes passed until the phone was found in her car. Unfortunately, there were no outgoing calls to him. The nervousness in both could be felt from kilometers. They could not explain what was happening. Clueless about where to find answers, the day passed without major problems.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                The next day, at the same time, Nick received the same call. This time he replied. But only a deep breath could be heard. Nothing else. He tried to speak, but nothing or no one answered.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Nick is now 27 years old. Every single day, since that day, his mom calls him at the same time. There is an unsettling silence on the other end, broken only by the sound of a deep breath.
                            </Text>
                        </section>
                    </Container>
                </article>
                <Recommendation story1={story1} story2={story2} />
            </main>
        </>
    );
};

export default TheCall;

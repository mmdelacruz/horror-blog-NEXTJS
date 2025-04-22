import React from 'react';
import closet from '../../../../public/img/hidden-in-the-closet-story.jpg';
import { Container, Text, Center, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './style.module.css';
import turnAroundImg from '../../../../public/img/turn-around.jpg';
import theCallImg from '../../../../public/img/the-call.jpg';
import Recommendation from '@/app/components/Recommendation';

export const metadata = {
    title: 'Hidden In The Closet: A Horrifying Creature - Scary Aisle',
    description: 'The horrifying experience a poor little kid had to face when some kind of creature was haunting him from inside his closet, preventing him from sleeping.',
    keywords: 'horrifying, experience, story, kid, closet, creepy, wardrobe, creature, monster',
    alternates: {
        canonical: 'https://www.scaryaisle.com/stories/hidden-in-the-closet/',
    },
};

const story1 = {
    id: 4,
    title: "The Call",
    backgroundImage: theCallImg,
    url: 'the-call/',
}

const story2 = {
    id: 2,
    title: "Turn Around",
    backgroundImage: turnAroundImg,
    url: 'turn-around/',
}


const HiddenInTheCloset = () => {
    return (
        <>
            <main>
                <article>
                    <Container>
                        <Title p={50} fw={900} fz={45} ta={"center"}>Hidden In The Closet: A Horrifying Creature</Title>
                        <section>
                            <Text className={classes.notIA} fs={'italic'} fw='bold' fz={15} ps={30} ta={"start"}>This horror story was written by a human, not by AI.</Text>
                            <Text fz={20} p={30} ta={"start"}>
                                Like every single night, the young seven-year-old boy was getting ready to go to sleep. His room had a big window where the moonlight would usually enter. For the past week, the kid would feel very scared as he could feel something strange inside his closet. This presence would make his body shake until he falls asleep. It was indescribable, it was like something or someone watching him, lurking, waiting for him to enter the world of dreams.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                The boy only lived with his dad, no brothers or sisters. He had lots of friends in the school and a few friendly neighbors. His dad would work a lot to make ends meet, so the kid would spend long hours in the school. They had a very close and good relationship. Despite that, he felt nervous sharing his dad about what had been haunting him for days.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                One night, once again the little boy tried to get some sleep, being horrified with the thing inside the closet. However, this time he forgot to fully close the door and the little crack on it was driving him insane. He swore he could see eyes, and could not stand it any longer. He ran to his dad’s room and quietly woke him up. Trying to remain calmed, and between tears, the kid explained the situation to his dad. He seemed so scared that the dad offered the kid to join him, so they could both sleep in the same room.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Days passed by, and the kid felt a bit better about the whole scary situation with his closet. However, that didn’t mean that every night at bedtime he would feel the presence again. The boy asked his father if he could have a TV installed in his room. It was a big relief for the little man once the TV was ready to use. He would always watch cartoons until falling asleep.

                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Even though the dad was extremely invested in his job, he always made sure the kid was happy in all aspects. He had a talk with his son about the horrifying situation with the closet and the kid explained his ways of coping. The TV was very good at this, so the father surprised his son with some headphones that could be connected to it. The kid was very grateful, and happy about being more disconnected from that horrible room. Several weeks went by, and the kid and his headphones were best friends at night. Almost every morning, the father would wake his son up wearing his headphones. The horrid situation with the presence inside the closet was left behind and they both continued having a great life.
                            </Text>
                        </section>

                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                August arrived, and it was a very stormy month where they lived. This was one of those scary nights where the storm and lightning make everyone a bit more susceptible to the unsettling. They both shared a very nice dinner with a great funny movie before bed. The ritual of every night began, the kid took his headphones, turned the TV on and got fully ready to sleep. At this time, the storm was at its worst. A lightning strike every few seconds. Suddenly, the lights went off due to the heavy storm and so did the TV. The poor little kid was trembling out of fear. This time, he could hear some kind of low grunt. Despite the paralysis caused by the fear, the boy jumped from his bed and got to his dad’s bedroom as fast as possible. The dad quickly tried to calm his son as he was clearly extremely scared with the whole situation.
                            </Text>
                        </section>

                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                They both decided to put an end on the closet-problem. Once for all. The father took his mobile phone, turned the flashlight on, and they both slowly walked to the kid’s room. The sound of the wind mixed with the heavy storm gave them chills. But despite the fear, they kept going. The father stopped in front of the closet door and opened it with a strong movement. A very skinny and humanoid body was hiding there, inside the wardrobe. Albeit having a human-like body, this thing had no face. Instead, it had some holes. Some of them got smaller, some others bigger. As if the thing was breathing or maybe hearing through them. The creature moved one of its arms and a crackling sound filled the room. A horrendous odor could be smelled once the beast moved. Father and son were petrified, they didn’t make any sound. They could not believe what they were seeing. The poor boy peed his pants out of fear and the father was shaking out of control. The horrible monstrosity grunted loudly and escaped from the closet. It ran through the whole house looking for a way out, until it broke a window with his body. The thing ran away. Disappearing from the sight of the kid and the dad. They both were hugging each other while crying.
                            </Text>
                        </section>
                        <Center>
                            <Image
                                className={classes.img}
                                alt='A picture of a small creature standing in the darkness'
                                src={closet} />
                        </Center>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                They both decided to put an end on the closet-problem. Once for all. The father took his mobile phone, turned the flashlight on, and they both slowly walked to the kid’s room. The sound of the wind mixed with the heavy storm gave them chills. But despite the fear, they kept going. The father stopped in front of the closet door and opened it with a strong movement. A very skinny and humanoid body was hiding there, inside the wardrobe. Albeit having a human-like body, this thing had no face. Instead, it had some holes. Some of them got smaller, some others bigger. As if the thing was breathing or maybe hearing through them. The creature moved one of its arms and a crackling sound filled the room. A horrendous odor could be smelled once the beast moved. Father and son were petrified, they didn’t make any sound. They could not believe what they were seeing. The poor boy peed his pants out of fear and the father was shaking out of control. The horrible monstrosity grunted loudly and escaped from the closet. It ran through the whole house looking for a way out, until it broke a window with his body. The thing ran away. Disappearing from the sight of the kid and the dad. They both were hugging each other while crying.
                            </Text>
                        </section>

                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                Several months passed by. Dad and kid moved from that creepy house. Far away. As much as possible. They made sure the new house where they are living now has no closets.
                            </Text>
                        </section>

                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                No one believes them. Information found on the internet leaves them with even more questions. They are clueless. Fortunately, as time goes by, they are healing the emotional wounds the creature left behind. However, they will never be completely free.
                            </Text>
                        </section>

                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>
                                By chance… Do you have a closet in your room?
                            </Text>
                        </section>
                    </Container>
                </article>
                <Recommendation story1={story1} story2={story2} />
            </main>
        </>
    );
};

export default HiddenInTheCloset;

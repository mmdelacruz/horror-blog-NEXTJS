
import React from 'react';
//import oldCabinImg from '../../../../public/img/turn-around-story.jpg';
import { Container, Text, Center, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './style.module.css';
import theCallImg from '../../../../public/img/the-call.jpg';
import hiddenInTheClosetImg from '../../../../public/img/hidden-in-the-closet-card.jpg';
import Recommendation from '@/app/components/Recommendation';

export const metadata = {
    title: 'Trapped: School Horror Story - Scary Aisle',
    description: 'A horror story that takes place on a school. Discover the scary mystery behind the lost friend and how the darkness will trap you inside the classrooms.',
    keywords: 'school, scary, story, candle, horror, friends',
    alternates: {
        canonical: 'https://www.scaryaisle.com/stories/trapped/',
    },
};

const story1 = {
    id: 6,
    title: "Hidden In The Closet",
    backgroundImage: hiddenInTheClosetImg,
    url: 'hidden-in-the-closet/',
}

const story2 = {
    id: 4,
    title: "The Call",
    backgroundImage: theCallImg,
    url: 'the-call/',
}




const Trapped = () => {
    return (
        <>
            <main>
                <article>
                    <Container>
                        <Title p={50} fw={900} fz={45} ta={"center"}>Trapped: School Horror Story</Title>
                        <section>
                            <Text className={classes.notIA} fs={'italic'} fw='bold' fz={15} ps={30} ta={"start"}>This horror story was written by a human, not by AI.</Text>
                            <Text fz={20} p={30} ta={"start"}>It’s not a surprise that many of us remember our early days with a smile. Going to school with hundreds of friends, long holidays, all the energy of the world to do what we want, a loving family to feel secure at night, a friendly pet that quickly becomes our brother or sister. For some others, this is not exactly the same. This is the story of a kid. A memory that will haunt him forever.</Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Everything started one day when he noticed his best friend had been missing school for too many days. They usually shared everything, from group tasks to break time outside the classroom. Apparently, his friend got sick and it’s been a week since they saw each other. The school was located in a small town, in one of those places where all people know everyone and everything. Their teacher was very friendly and once a month let the students bring some food to the classroom to share. It was a complete shame that his friend lost it this month.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>After a few more days, he began to wonder. What could he have caught that made him skip classes for so long? He was feeling worried for his friend and at the same time, the feeling of loneliness in the classroom was making him disconnected. However, the scariest thing was that it seemed like everyone else had forgotten about him. How could that be possible? It’s been almost two weeks and nobody mentioned him.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>One more day passed, and the little boy could not stand it any longer. He asked the teacher if there were any news about his friend. The teacher, thinking for a while about who was referring him to, said no. Speechless, the kid went to his seat with a horrifying feeling in his chest. Something must be going on. In an act of desperation, when no one was watching, he approached the empty seat of his missing friend and started looking for a hint, something was better than nothing. He didn’t know what it was, but he was determined. In a fraction of a second, he saw it. A piece of paper glued to the underside of the desk.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>“I’m bored up here! Meet me when no one is around.”
                                That’s what was written on the piece of paper. At first, the kid felt extremely sad, as he thought his friend was dead upon reading ‘I’m bored up here…’. But a part of him didn’t buy that. There is no way he is dead. For the rest of the class, the boy tried to decode what his friend was trying to say.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>The next morning, while getting ready for a new class day, the kid thought about trying something. Despite there being no usable classrooms in it, the school actually has a second floor. He once heard that old and missing things are stored on the second floor. Items that no one claims. Maybe his friend meant the second floor. He could get there in the middle of the class. He only needs to ask the teacher to go to the bathroom for a while. Although it was a good idea, the kid was creeped out about the idea of visiting the second floor. Something there was strange and scary.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>A couple of hours passed by, and the trembling kid was unsure about following his plan, but the idea of seeing her friend again, or at least solving the mystery of the note on his friend’s table, gave him enough courage to ask the teacher to go to the bathroom. The teacher agreed without hesitation, and the young boy stepped out of the classroom. There was no turning back now. Quickly, he started walking fast to the stairway, trying not to alarm any adult around the area. Fortunately, no one was around.</Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>The absence of light was increasing every time the kid took another step. Every step was full of fear and anxiousness. Every step he took was followed by its own echo. The silence was increasing, creating an unsettling and horrific environment. After a few moments, he got to the second floor. It seemed impossible for the light to get to that floor. Not even his worst nightmares could describe what the poor little kid was experiencing. Again, the idea of meeting his friend again, gave him the bravery to keep on going, despite his gut telling him not to. Out of nowhere, a creepy orange light came out from one of the rooms. This part of the school was completely terrifying.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Armed with only his loyal friendship, the boy got to the source of the light. The room was excessively cold, he could see his own breath. The light was coming out from a candle which explains the creepy shadows on the walls. Next to the candle, there was a picture. It took a while for the kid’s eyes to get used to the lack of light, but once they did, he could clearly recognize his good friend on it. Instantly, a laugh was heard in the distance. However, as he turned back, he was surprised by his friend. Just standing there, completely static. His face was pointing down, looking directly at the floor.
                            </Text>
                        </section>
                        <section>
                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>The kid was ready to hug his friend, but something told him not to. The unsettling silhouette of his friend looking directly at the floor was an image that he will not be able to forget. Suddenly, his friend started to raise his head. He had an extremely scary smile. One of those smiles that gives you nothing, but a sense of total dread. A smile that was so unsettling, that it made the kid start crying in total silence. The smiley boy whispered: ‘You will never escape’. And the lights went off.</Text>

                            <Text fz={20} p={30} pt={0} mt={0} ta={"start"}>Similar to waking up from a coma, the kid was called out by his teacher. Asking him to wake up. Was he asleep? Was it a dream? He was back in the classroom again, with all his classmates and his teacher. What happened? The teacher continued with the class as if nothing would have happened. The kid looked at all his classmates, and he was there. Paying attention to the teacher in his seat, as he normally did. His friend was back again! Once their eyes met, his friend did it again. The horrifying smile. A smile that will always be there, in the darkness, when the lights are gone.
                            </Text>
                        </section>

                        {/* <Center>
                            <Image
                                className={classes.img}
                                alt='A small wooden cabin in the middle of the foggy forest.'
                                src={oldCabinImg} />
                        </Center> */}
                    </Container>
                </article>
                <Recommendation story1={story1} story2={story2} />
            </main>
        </>
    );
};

export default Trapped;
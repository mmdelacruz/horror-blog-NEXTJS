"use client";

import doNotEnterImg from '../../../public/img/do-not-enter.jpg';
import turnAroundImg from '../../../public/img/turn-around.jpg';
import openYourEyesImg from '../../../public/img/window-shadow.jpg';
import theCall from '../../../public/img/the-call.jpg';
import dontWatchIt from '../../../public/img/dont-watch-it-card.jpg';
import hiddenInTheClosetImg from '../../../public/img/hidden-in-the-closet-card.jpg';
import trappedImg from '../../../public/img/trapped-card.jpg';
import { StaticImageData } from 'next/image';

export type CardData = {
  id: number;
  url: string;
  title: string;
  backgroundImage: string | StaticImageData;
};

export const cardsData: CardData[] = [
  {
    id: 1,
    url: 'open-your-eyes/',
    title: 'Open Your Eyes',
    backgroundImage: openYourEyesImg,
  },
  {
    id: 2,
    url: 'turn-around/',
    title: 'Turn Around',
    backgroundImage: turnAroundImg,
  },
  {
    id: 3,
    url: 'do-not-enter/',
    title: 'Do Not Enter',
    backgroundImage: doNotEnterImg,
  },
  {
    id: 4,
    url: 'the-call/',
    title: 'The Call',
    backgroundImage: theCall,
  },
  {
    id: 5,
    url: 'dont-watch-it/',
    title: "Don't Watch It",
    backgroundImage: dontWatchIt,
  },
  {
    id: 6,
    url: 'hidden-in-the-closet/',
    title: "Hidden In The Closet",
    backgroundImage: hiddenInTheClosetImg,
  },
  {
    id: 7,
    url: 'trapped/',
    title: "Trapped",
    backgroundImage: trappedImg,
  },
];
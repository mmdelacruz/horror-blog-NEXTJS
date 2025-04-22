import React from 'react'
import AllStories from '../components/AllStories'
import { link } from 'fs';


export const metadata = {
    title: 'Scary Aisle - Stories',
    description: 'In this page, you will find scary stories to read at night. Turning the lights on is not an option for this horrifying occasion',
    keywords: 'scary, stories, read, night, scary stories to read at night',
    alternates: {
      canonical: 'https://www.scaryaisle.com/stories/',
    },
  };

const StoriesPage = () => {
  return (
    <AllStories/>
  )
}

export default StoriesPage
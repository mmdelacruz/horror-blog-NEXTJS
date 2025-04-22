import { Text, Title, Button, Container } from '@mantine/core';
import image from '../../../public/img/floating-man.jpg';
import classes from '../styles/homeAllStories.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function HomeAllStories() {
  return (

    <div className={classes.mainContainer}>
      <Container >
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>Be careful...</Title>
            <Text fw={500} fz="lg">
              No return beyond this point!
            </Text>
            <Text fz="sm">
              You will be immersed in a different world. A world full of unsettling experiences, waiting for you and your soul.
            </Text>

            <div className={classes.controls}>
              <Link href="/stories/"  className={classes.control}>     
                  Explore Stories
              </Link>
            </div>
          </div>

          
          <Image alt='Unsettling picture about some people starting to float. Only silhouettes can be seen' src={image} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}

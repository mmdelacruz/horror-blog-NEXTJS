import { Container, Title, Text, Button } from '@mantine/core';
import classes from './styles/notFoundStyle.module.css';
import Link from 'next/link';


export function NotFound() {
    return (
        <Container className={classes.root}>
            <div>
                <Title className={classes.title}>404 - Not Found</Title>
                <Text c="dimmed" size="lg">
                    The page you are trying to visist run away out of fear.
                </Text>
                <Link href='/'>
                    <Button variant="outline" size="md" mt="xl" className={classes.control}>
                        Get back to home page
                    </Button>
                </Link>
            </div>

        </Container>
    );
}
export default NotFound;
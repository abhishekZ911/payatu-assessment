import { Flex, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <Flex justify='center' h='100vh' alignItems='center'>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Link to='/1'>
                <Card>
                <CardHeader>
                    <Heading size='md'>Assignment Part 1</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
                </Card>
                </Link>

                <Card>
                <CardHeader>
                    <Heading size='md'>Assignment Part 2</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
                </Card>

                <Link to='/3'>
                <Card>
                <CardHeader>
                    <Heading size='md'>Assignment Part 3</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
                </Card>
                </Link>

                <Link to='/4'>
                <Card>
                <CardHeader>
                    <Heading size='md'>Assignment Part 4</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
                </Card>
                </Link>
            </SimpleGrid>
        </Flex>
     );
}
 
export default Home;

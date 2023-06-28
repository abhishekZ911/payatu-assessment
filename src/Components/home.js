import { Flex, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <Flex justify='center' h='100vh' alignItems='center'>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Card>
                <CardHeader>
                    <Heading size='md'>Assignment Part 1</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Creating a React component that renders a list of items from a remote API. 

                    </Text>
                </CardBody>
                <Link to='/1'>

                <CardFooter>
                    <Button backgroundColor='#C4B0FF'>View here</Button>
                </CardFooter>
                </Link>

                </Card>

                
                <Card>
                <CardHeader>
                    <Heading size='md'>Assignment Part 2</Heading>
                </CardHeader>
                <CardBody>
                    <Text>
                        Creating a React component that allows users to filter a list of items by name, description, or image
                    </Text>
                </CardBody>
                <Link to='/2'> 

                <CardFooter>
                    <Button backgroundColor='#C4B0FF'>View here</Button>
                </CardFooter>
                </Link>


                </Card>

                <Card>
                <CardHeader>
                    <Heading size='md'>Assignment Part 3</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Creating a React component that allows users to create, edit, and delete items                        
                    </Text>
                </CardBody>
                <Link to='/3'>

                <CardFooter>
                    <Button backgroundColor='#C4B0FF'>View here</Button>
                </CardFooter>
                </Link>

                </Card>

                <Card>
                <CardHeader>
                    <Heading size='md'>Assignment Part 4</Heading>
                </CardHeader>
                <CardBody>
                    <Text>
                        Creating a React component that allows users to upvote and downvote items.
                    </Text>
                </CardBody>
                <Link to='/4'>

                <CardFooter>
                    <Button backgroundColor='#C4B0FF'>View here</Button>
                </CardFooter>
                </Link>

                </Card>
            </SimpleGrid>
        </Flex>
     );
}
 
export default Home;

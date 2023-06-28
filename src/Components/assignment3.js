import {Box, Flex, Image, Button,Container,FormControl,FormLabel,Heading,Input,Stack,Textarea,VStack,} from '@chakra-ui/react';
import { useState } from 'react';

const CreationDeletionItems = () => {

    const [items , setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    //For generating unique ids 
    const generateUniqueId = () =>{
        return Math.floor(Math.random() *100);
    }


    //event handlers : 


    const OnNameInput = (e) =>{
        setItemName(e.target.value)
    }

    const onDescriptionInput = (e) => {
        setDescription(e.target.value)
    }

    const onImageUrlInput =(e) =>{
        setImageUrl(e.target.value);
    }

    //function that handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();
       
      const itemNew = {
          id: generateUniqueId() ,
          itemName,
          imageUrl,            description
     };

        setItems([...items, itemNew])
        setItemName('');
        setDescription('');
        setImageUrl('');
        console.log(items)
    }


    //function to handle delete button
    const handleDeleteItem = (itemId) =>{
        const filteredItemList = items.filter((item) => item.id !== itemId);
        setItems(filteredItemList);
    }


    const mappedItems = items.map((item) => {
        return (
        <Box key={item.id} borderWidth="1px" p={4} rounded="md">
            <Flex w='100%' justify='space-around'>
          <Image w='25%' mr='3' boxSize='5rem' borderRadius='full' src={item.imageUrl} alt={item.name} />
            <Flex w='75%' direction='column' align='start' justify='space-around'>
          <Heading as="h3" size="md" mb={2}>
            {item.itemName}
          </Heading>
          <p>{item.description}</p>
          </Flex>
          </Flex>
          <Button
            mt={4}
            r='0'
            size="sm"
            colorScheme="red"
            onClick={() => handleDeleteItem(item.id)}>
            Delete
          </Button>
        </Box>
      )})






    return ( 
        <>
        <Container maxW="sm" mt={8}>
        <VStack spacing={4} align="stretch">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Create Item
            </Heading>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="itemName">
                  <FormLabel>Name:</FormLabel>
                  <Input
                    type="text"
                    value={itemName}
                   onChange={OnNameInput}
                  />
                </FormControl>
                <FormControl id="description">
                  <FormLabel>Description:</FormLabel>
                  <Textarea
                    value={description}
                    onChange={onDescriptionInput}
                  />
                </FormControl>
              <FormControl id="imageURL">
                  <FormLabel>Image URL:</FormLabel>
                  <Input
                    type="text"
                    value={imageUrl}
                    onChange={onImageUrlInput}
                 />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Save Item
              </Button>
              </Stack>
            </form>
          </Box>

       <Box>
            <Heading as="h2" size="lg" mb={4}>
              Items
            </Heading>
            {mappedItems}
          </Box>
        </VStack>
      </Container>
        </>
     );
}
 
export default CreationDeletionItems;
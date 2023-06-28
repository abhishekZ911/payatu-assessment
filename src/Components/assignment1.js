import useFetch from "./useFetch";
import {Box, Text, Flex, Image, Center, Divider} from "@chakra-ui/react";

const ListOfItems = () => {

    const {datas, isPending} = useFetch('https://api.github.com/users');

    const mappedData = datas.map((item) =>{
        return(
        <>
        <Box key={item.id} p='3'>
            <Flex justify='space-between' align='center'>
                <Box boxSize='xs' minW='60px' maxH='60px' mr='2' w='10%'>
                    <Image 
                    borderRadius='full' boxSize='70' src={item.image}></Image>
                </Box>
                <Flex direction='column' justify='space-between' pt='4' w='90%'>
                    <Box>
                        <Text fontSize='md' fontWeight='bold'> {item.name} </Text></Box>
                    <Box> <Text fontSize='sm'> {item.description} </Text></Box>
                </Flex>
            </Flex>
        </Box>
        <Divider/>
        </>
        )
    })

    return ( 
        <>
        <Flex>
        {isPending && (
            <Box w='100%' h='100vh' display='flex' alignItems='center' justifyContent='center'>
                <Text fontSize='2xl'>Loading...</Text>
            </Box>
        )}
        {!isPending && 
            <Flex>
                <Box 
                position='fixed'
                w='100%' 
                h='100px' 
                backgroundColor='#164B60' 
                zIndex='1'>
                    <Flex align='center' justify='center' width='100%' height='100%'>
                    <Text fontSize='4xl' fontWeight='800' color='white'>List of Items</Text>
                    </Flex>
                </Box>
                <Box w='80%' position='relative' mr='auto' ml='auto' top='110px'>
                    {mappedData}
                </Box>
            </Flex>

        }
        </Flex>
        </>
     );
}
 
export default ListOfItems;
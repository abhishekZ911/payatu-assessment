import { useState } from "react";
import {Box, Flex, Image,Checkbox,Container,FormControl,FormLabel,Heading,Input,Stack,Text,VStack} from '@chakra-ui/react';


const SearchItemsComponent = ({items}) => {
    
const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);

  //handling the search input
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

  //Handling filter checkbox change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };


  //main function to search items
  const filteredItems = items.filter((item) => {
    if (searchTerm.trim() === '') {
      return true;
    }
        const matchFilter = selectedFilter && (item[selectedFilter].toLowerCase().includes(searchTerm.toLowerCase()));
      return matchFilter;
  });



  return (
    <Container pt='2' maxW="md" mt={8} backgroundColor='#FFF4E0' borderRadius='10px' >
        <VStack spacing={4} align="stretch">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Animal Filter
            </Heading>
        <FormControl>
              <FormLabel>Search Term:</FormLabel>
            <Input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
                placeholder="Search..."
             />
        </FormControl>
          </Box>

          <Box>
            <Heading as="h3" size="md" mb={2}>
              Filter By:
            </Heading>
         <Stack direction="row" spacing={4}>
              <Checkbox
                isChecked={selectedFilter === 'name'}
                onChange={() => handleFilterChange('name')}
              >
                Name
              </Checkbox>
              <Checkbox
                isChecked={selectedFilter === 'description'}
                onChange={() => handleFilterChange('description')}
              >
                Description
              </Checkbox>
              <Checkbox
                isChecked={selectedFilter === 'image'}
                onChange={() => handleFilterChange('image')}
              >
                Image
         </Checkbox>
            </Stack>
          </Box>

        <Box>
            <Heading as="h2" size="lg" mb={4}>
              Filtered Items
            </Heading>
            <ul>
              {filteredItems.map((item) => (
                <li key={item.id} style={{'listStyleType': 'none'}}>
                  <Flex m='3' borderRadius='13px' backgroundColor='white'>
                    <Image src={item.image}
                    boxSize='120px'
                    p='3'
                    borderRadius='20px'
                    ></Image>
                    <Flex direction='column' justify='space-evenly'>
                        <Heading as="h3" size="md" mb={2}>
                            {item.name}
                        </Heading>
                        <Text>{item.description}</Text>
                    </Flex>
                    
                  </Flex>
                </li>
              ))}
            </ul>
          </Box>
        </VStack>
      </Container>
  );
};

  
 
export default SearchItemsComponent;










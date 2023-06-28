import { useState } from "react";
import { Divider, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import {ChevronUpIcon,ChevronDownIcon} from "@chakra-ui/icons";


const UpvoteDownvotePage = ({allData}) => {

  console.log(allData)
  const [datas, setDatas] = useState(allData);
  
  //Function to handle Upvotes
    const handleUpVotes = (targetItemId) =>{ console.log(targetItemId)
        setDatas((previousItems)=> previousItems.map((item) =>
        {
        if(item.id === targetItemId){
             if(item.isUpvote==='yes'){
                return {...item, isDownvote: 'no'}
             }   
             else if(item.isUpvote === 'no')
             {
                return {...item,isUpvote: 'yes',isDownvote: 'no', totalUpvotes: item.totalUpvotes +1, totalDownvotes: item.totalDownvotes -1}
             }
            if(item.isUpvote === 'neutral'){
                return {...item,isUpvote: 'yes',isDownvote: 'no', totalUpvotes: item.totalUpvotes +1}
            }

        }
        else {
            return item
        }
    }))
    };

    //Function to handle downvote button
    const handleDownVotes = (targetItemId) =>{
        setDatas((previousItems)=> previousItems.map((item) =>
        {
            if(item.id === targetItemId){
                if(item.isDownvote === 'yes'){
                   return {...item, isUpvote: 'no'}
                }   
                else if(item.isDownvote === 'no'){
                   return {...item,isUpvote: 'no', isDownvote: 'yes', totalUpvotes: item.totalUpvotes-1, totalDownvotes: item.totalDownvotes +1}
                }                
                if(item.isDownvote === 'neutral'){
                   return {...item,isUpvote: 'no', isDownvote: 'yes', totalDownvotes: item.totalDownvotes +1}
                } 
        }
        else{
            return item
        }
        }))
    };

    console.log(datas)

    //mapping up of data items to display in the UI
    const mappedData = datas.map((data) =>{
        console.log(data.id)
        return(
            <>
                <Flex p='3' key={data.id} id={data.id}>
                    <Flex w='15%' justify='space-between' direction='column' mr='2%'>
                        <Flex align='center' justify='space-between' >
                        <IconButton
                        backgroundColor={(data.isUpvote === 'yes') ? '#C9A7EB' : 'transparent'}
                        onClick={() => handleUpVotes(data.id) }
                        icon={<ChevronUpIcon boxSize={7}/>}
                        />
                        <Text>{data.totalUpvotes}</Text>
                        </Flex>
                        
                        <Flex  align='center' justify='space-between'>
                        <IconButton
                        backgroundColor={(data.isDownvote === 'yes') ? '#C9A7EB' : 'transparent'}
                        icon={<ChevronDownIcon boxSize={7}/>}
                        onClick={() => handleDownVotes(data.id) }/>
                        <Text>{data.totalDownvotes}</Text>
                        </Flex>
                    </Flex>
                    <Flex w='78%' direction='column' ml='4'>
                        <Text fontSize='sm'>{data.body}</Text>
                        <Flex>
                            <Text fontSize='xs'>{data.email}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Divider/>
            </>
        )
    }
    )

    
    //data of the list is stored in array of object 
    return ( 
        <><Box w='100%'>
        <Flex w='100%' h='100px' position='fixed' backgroundColor='#5C469C'
        zIndex='1'>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center'>
                <Text color='white' fontWeight='800' fontSize='4xl'>Up-Votes and Down-Votes</Text>
            </Box>
        </Flex>

        <Box
        marginLeft='auto'
        marginRight='auto'
        justify='center'
        position='relative'
        top='110px'
        w='70%'>
            <Box  w='100%' 
            borderRadius='15px' >
                {mappedData}    
            </Box>
        </Box>
        </Box>
        </>
     );
}
 
export default UpvoteDownvotePage;
import { useState } from "react";
import { Divider, Box, Flex, IconButton, Icon, Text, Center } from "@chakra-ui/react";
import {ChevronUpIcon,ChevronDownIcon} from "@chakra-ui/icons";


const UpvoteDownvotePage = () => {

    const [datas,setDatas] = useState([
        {
          postId: 1,
          id: 1,
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 1,
          id: 2,
          name: "quo vero reiciendis velit similique earum",
          email: "Jayne_Kuhic@sydney.com",
          body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 1,
          id: 3,
          name: "odio adipisci rerum aut animi",
          email: "Nikita@garfield.biz",
          body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
          
        },
        {
          postId: 1,
          id: 4,
          name: "alias odio sit",
          email: "Lew@alysha.tv",
          body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 1,
          id: 5,
          name: "vero eaque aliquid doloribus et culpa",
          email: "Hayden@althea.biz",
          body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 2,
          id: 6,
          name: "et fugit eligendi deleniti quidem qui sint nihil autem",
          email: "Presley.Mueller@myrl.com",
          body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 2,
          id: 7,
          name: "repellat consequatur praesentium vel minus molestias voluptatum",
          email: "Dallas@ole.me",
          body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 2,
          id: 8,
          name: "et omnis dolorem",
          email: "Mallory_Kunze@marie.org",
          body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 2,
          id: 9,
          name: "provident id voluptas",
          email: "Meghan_Littel@rene.us",
          body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 2,
          id: 10,
          name: "eaque et deleniti atque tenetur ut quo ut",
          email: "Carmen_Keeling@caroline.name",
          body: "voluptate iusto quis nobis reprehenderit ipsum amet 'neutral'a\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat 'neutral'a et accusamus nisi facilis",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 3,
          id: 11,
          name: "fugit labore quia mollitia quas deserunt nostrum sunt",
          email: "Veronica_Goodwin@timmothy.net",
          body: "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 3,
          id: 12,
          name: "modi ut eos dolores illum nam dolor",
          email: "Oswald.Vandervort@leanne.org",
          body: "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 3,
          id: 13,
          name: "aut inventore non pariatur sit vitae voluptatem sapiente",
          email: "Kariane@jadyn.tv",
          body: "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 3,
          id: 14,
          name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
          email: "Nathan@solon.io",
          body: "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 3,
          id: 15,
          name: "debitis magnam hic odit aut ullam nostrum tenetur",
          email: "Maynard.Hodkiewicz@roberta.com",
          body: "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 4,
          id: 16,
          name: "perferendis temporibus delectus optio ea eum ratione dolorum",
          email: "Christine@ayana.info",
          body: "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 4,
          id: 17,
          name: "eos est animi quis",
          email: "Preston_Hudson@blaise.tv",
          body: "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 4,
          id: 18,
          name: "aut et tenetur ducimus illum aut 'neutral'a ab",
          email: "Vincenza_Klocko@albertha.name",
          body: "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\'neutral'am velit sit magnam laborum\nmagni ut molestias",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 4,
          id: 19,
          name: "sed impedit rerum quia et et inventore unde officiis",
          email: "Madelynn.Gorczany@darion.biz",
          body: "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut",
          
          totalUpvotes: 344,
          totalDownvotes: 123
        },
        {
          postId: 4,
          id: 20,
          name: "molestias expedita iste aliquid voluptates",
          email: "Mariana_Orn@preston.org",
          body: "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore",
          isUpvote: 'neutral',
          isDownvote: 'neutral',
          totalUpvotes: 344,
          totalDownvotes: 123
        }
    ]);
    
    const handleUpVotes = (targetItemId) =>{ console.log(targetItemId)
        setDatas((previousItems)=> previousItems.map((item) =>
        {
        if(item.id === targetItemId){
             if(item.isUpvote==='yes'){
                return {...item, isDownvote: 'no'}
             }   
             else if(item.isUpvote === 'no')
             {
                return {...item,isUpvote: 'yes',isDownvote: 'no', totalUpvotes: item.totalUpvotes +1}
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

    const handleDownVotes = (targetItemId) =>{
        setDatas((previousItems)=> previousItems.map((item) =>
        {
            if(item.id === targetItemId){
                if(item.isDownvote === 'yes'){
                   return {...item, isUpvote: 'no'}
                }   
                else if(item.isDownvote === 'no'){
                   return {...item,isUpvote: 'no', isDownvote: 'yes', totalDownvotes: item.totalDownvotes +1}
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
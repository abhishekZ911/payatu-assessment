import { ChakraProvider } from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom';
import ListOfItems from './Components/assignment1';
import SearchItemsComponent from './Components/assignment2';
import CreationDeletionItems from './Components/assignment3';
import UpvoteDownvotePage from './Components/assignment4';
import Home from './Components/home';



//Importing self made array of objects for assignment no. 2 and 3
import searchData from './Components/searchData';
import commentsData from './Components/upvoteDownvoteData';

//In this project, I have used Chakra UI to design layout and other components.
//I have also used react-router-dom package to ensure smooth routing.
//For fetching from api, I have used react-axios

function App() {
  return (
    <ChakraProvider>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='1' element={<ListOfItems/>}></Route>
        <Route path='2' element={<SearchItemsComponent items={searchData}/>}></Route>
        <Route path='3' element={<CreationDeletionItems/>}></Route>
        <Route path='4' element={<UpvoteDownvotePage allData={commentsData}/>}></Route>
    </Routes>
    </ChakraProvider>
  );
}

export default App;

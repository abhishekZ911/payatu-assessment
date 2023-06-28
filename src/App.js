import { ChakraProvider } from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom';
import ListOfItems from './Components/assignment1';
import CreationDeletionItems from './Components/assignment3';
import UpvoteDownvotePage from './Components/assignment4';
import Home from './Components/home';

function App() {
  return (
    <ChakraProvider>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='4' element={<UpvoteDownvotePage/>}></Route>
        <Route path='1' element={<ListOfItems/>}></Route>
        <Route path='3' element={<CreationDeletionItems/>}></Route>
    </Routes>
    </ChakraProvider>
  );
}

export default App;

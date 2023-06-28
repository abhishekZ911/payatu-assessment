import axios from 'axios'; 
import { useEffect, useState } from 'react';


const useFetch = (url) => {

    let data = [];
    const [datas, setDatas] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        
        const fetchData = async () =>{
            try{
                const response = await axios.get(url);
                const transformedData = response.data.map((item) => ({
                  id: item.id,
                  name: item.login,
                  image: item.avatar_url,
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }));
                setDatas(transformedData);
                setIsPending(false);
            }
            catch(e){
                console.log(e);
            }

            
        return data;
        }

        
        // const filtered = fetchData().then((data) =>{
        //     console.log(data)
        //     return ((data) => {
        //         return data.map((item) => {
        //             return {
        //                 id: item.id,
        //                 name: item.login,
        //                 image: item.avatar_url
        //             }
        //         }
        //     )})}
        //         );
        //         console.log(filtered)
        fetchData();
        

    }, [url])


    console.log(datas)
    return {datas, isPending};
     
}
 
export default useFetch;
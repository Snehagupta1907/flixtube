import axios from "axios";


const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults:'50',
    },
    headers: {
      'X-RapidAPI-Key': '291f086901mshc836e034fb8f9d0p14cc85jsnfa7cada8f093',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async(url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options);
    return data;
   
   

}
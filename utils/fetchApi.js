import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            //'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'bb77c8010dmshf78747e7f75a794p17e0b0jsn2791dbbd15b0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          },
    });

    return data;
}
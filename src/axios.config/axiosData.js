import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://pizzaallapala.p.rapidapi.com/productos',
    headers: {
      'X-RapidAPI-Key': 'f29dd72edbmsh97113ab990ccb5fp1ffb87jsn3068bca06d4d',
      'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
    }
  };

 export const getPizza=async()=>{
   
    try {
        const response = await axios.request(options);
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
 }



const options1 = {
  method: 'GET',
  url: 'https://pizzaallapala.p.rapidapi.com/productos-promo',
  headers: {
    'X-RapidAPI-Key': 'f29dd72edbmsh97113ab990ccb5fp1ffb87jsn3068bca06d4d',
    'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
  }
};

export const getPizzaforHome=async()=>{
  try {
    const response = await axios.request(options1);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
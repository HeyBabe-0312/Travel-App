import axios from "axios";

export const getPlacesData = async (type,sw,ne) => {
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '1fb8b26dbbmsh0dd274f5a074125p191cb8jsn99860485c3f6',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    }catch(error){
        console.log(error);
    }
}

export const getWeatherData = async (lat,lng) => {
  try{
    if(lat&&lng){
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
        params: {
          lon: lng,
          lat: lat,
        },
        headers: {
          'X-RapidAPI-Key': '554ae4c855msh0ab8889e217d284p174140jsn3b944560ad5a',
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
      });
      return data;
    }
  }catch(e){
    console.log(e);
  }
}
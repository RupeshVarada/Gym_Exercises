export const exercisesOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/status',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY
    }
  };




export const fetchData = async(url,options) => {
    const response= await fetch(url, options);
    const data=await response.json();

    return data;
}
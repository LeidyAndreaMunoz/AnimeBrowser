const getDataAnimes = async () => {
    // const dataAnimes = []
    try{
        const response = await fetch('https://api.jikan.moe/v3/season/later');
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error('Error get Data',error);
    } 
  }

export default getDataAnimes;
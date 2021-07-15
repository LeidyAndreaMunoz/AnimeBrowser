
const URI = 'https://api.jikan.moe/v3/search/anime?q=';

const getData = async (anime) => {

    let URL_SEARCH = `${URI}${anime}`;
    console.log(`URL para ser consultada por el API: ${URL_SEARCH}`);
    try{
        const response = await fetch(URL_SEARCH);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error('Error get Data',error);
    } 
}

export default getData;
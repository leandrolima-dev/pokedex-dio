const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const getPokemons = async () => {
  try {
    //Get na URL da API
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    
    //Get no results.url para pegar detalhes, usando uma chamada async/ await para retornar todas as Promises
    const getDetails = results.map( async(result) => {
      const newURL = result.url
        const secondResponse = await fetch(newURL)
        const secondData = await secondResponse.json()
        const secondResults = secondData
        
        return secondResults
    });
    //Retorna os resultados de todas as Promises
    const details = await Promise.all(getDetails);
    return { results, details };

  } catch (error) {
    console.log(error);
  }
};
getPokemons();

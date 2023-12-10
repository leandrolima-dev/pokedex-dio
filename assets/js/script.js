const pokemonListElement = document.querySelector(".pokemons");

function createPokemonList(pokemon) {
  return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                  <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                  </ol>

                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt=${pokemon.name}
                    />
                </div>
              </li>`;
}

pokemonsList = async () => {
  //Desestruturação de objetos, pegar os dados da API
  const {results, details} = await getPokemons();
  //Map para percorrer os dados da API
  results.map((pokemon, index) => {
    pokemonListElement.innerHTML += createPokemonList(pokemon, details[index]);
  console.log(details[index]);
  });
};
pokemonsList();

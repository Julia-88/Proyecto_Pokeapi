async function getPokemons(number) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + number);
    const data = await response.json();
    //console.log(data);
    return {
      name: data.name,
      id: data.id,
      type: data.types[0].type.name,
      img: data.sprites.other.home.front_default,
    };
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const pokemons = [];

  for (let index = 1; index <= 150; index++) {
    let pokemon = await getPokemons(index);
    pokemons.push(pokemon);
  }
  console.log(pokemons);
  let pokedex = document.getElementById("pokedex");
  console.log(pokedex);

  function createPokemonCard(pokemonName, pokemonType, img, pokemonId) {
    const divElem = document.createElement("div");
    divElem.className = "card";

    const h2Elem = document.createElement("h2");
    h2Elem.className = "card-title";
    h2Elem.textContent = pokemonName;

    const h3Elem = document.createElement("h3");
    h3Elem.className = "card-subtitle";
    h3Elem.textContent = pokemonType;

    const imgElem = document.createElement("img");
    imgElem.className = "card-image";
    imgElem.src = img;
    imgElem.alt = "Card Image";

    const pElem = document.createElement("p");
    pElem.textContent = pokemonName + " es el pokemon numero " + pokemonId;

    divElem.appendChild(h2Elem);
    divElem.appendChild(h3Elem);
    divElem.appendChild(imgElem);
    divElem.appendChild(pElem);

    pokedex.appendChild(divElem);
  }
  for (let p = 0; p < pokemons.length; p++) {
    createPokemonCard(
      pokemons[p].name,
      pokemons[p].type,
      pokemons[p].img,
      pokemons[p].id
    );
  }
}
main();

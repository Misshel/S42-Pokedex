'use strict';

const filterByPokemon = (pokemons,query) => {
  // console.log(pokemons);
  // console.log(pokemons.pokemon_species.name);
 const namePokemon = pokemons.filter((pokemon) => {
   return (pokemon.toLowerCase().indexOf(query.toLowerCase())!= -1);
 });
 return namePokemon;
}

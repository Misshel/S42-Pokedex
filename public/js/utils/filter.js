'use strict';

const filterByPokemon = (pokemons,query) => {
 const namePokemon = pokemons.filter((pokemon) => {
   return (pokemon.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase())!= -1);
 });
 return namePokemon;
}

const filterByName = (descriptions,name) => {
 const descriptionPokemon = descriptions.filter((description) => {
   return (description.name.toLowerCase().indexOf(name.toLowerCase())!= -1);
 });
 return descriptionPokemon;
}

'use strict';

const filterByPokemon = (pokemons,query) => {
 const namePokemon = pokemons.filter((pokemon) => {
   return (pokemon.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase())!= -1);
 });
 return namePokemon;
}
// const jk = (pokemons,query) => {
//   console.log(query);
//   var result;
//     result = pokemons.filter(function(e) {
//         e.pokemon_species.name.toLowerCase().indexOf(query) != -1;
//    });
//
//    console.log(result);
//  return result;
// }

// console.log(pokemonID);
//
// const filterByName =(pokemons)=>{
//   pokemonID.push(pokemons);
//   console.log(pokemonID);
//   return pokemonID;z
// }

// Modal
// const modal =(pokemon)=>{
//   const modalContainer = $(".modal");
//   const modal = $(".contPokemon").clone();
//   modalContainer.append(modal);
//   console.log("hola");
//
//   }

'use strict';


const pokemonItem = (pokemon,update)=>{
  const divpokemon = $('<div class="col s4 l2 contPokemon"></div>');
  let id = pokemon.entry_number;
  let name= pokemon.pokemon_species.name;
    id = ("00"+ id).slice(-3);

  const img= $(`<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png" alt="">`);
  const fondo= $(`<img  class="fondo" src="icon/notch-collectibles.png"></img>`);

  const detail = $('<div class="col s12"></div>');
  const icon = $('<div class="col s12 contIcon"></div>');
  const pokeball = $(`<a class="waves-effect waves-light" href="#modal1"><img class="icon"  src="icon/pokeball_gray.png"></img></a>`);
  const heart = $(`<img  class="icon" src="icon/valentines-heart.png"></img>`);
  const data = $(`<img class="icon"  src="icon/data.png"></img>`);
  const namePokemon = $(`<div class="col s12 center-align">${name}</div>`);

  icon.append(pokeball);
  icon.append(heart);
  icon.append(data);
  detail.append(icon);
  detail.append(namePokemon);

  divpokemon.append(img);
  divpokemon.append(fondo);
  divpokemon.append(detail);

  return divpokemon;
}


const pokemonSearch= (update) =>{

  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row text"></div>');

  const rowPokemon = $('<div class="row text rowPokemon"></div>');
  const colPokemon = $('<div class="col s12"></div>');

  const colSearch = $('<div class="col s6 offset-s1"></div>');
  const input = $('<i class="icon-search"></i><input id="name" type="text" name="" value="" placeholder="">');

  const colButton = $('<div class="col s3 offset-s2 center-align"></div>');
  const button = $('<button type="button" class="btn-large" name="button">A - Z</button>');

  colSearch.append(input);
  colButton.append(button);

  row.append(colSearch);
  row.append(colButton);

  rowPokemon.append(colPokemon);
  container.append(row);
  container.append(rowPokemon);

  state.pokedex.pokemon_entries.forEach((pokemon) => {
    colPokemon.append(pokemonItem(pokemon,update));
  });

console.log(state.pokedex.pokemon_entries.name);
  // const find = filterByPokemon(state.pokedex.pokemon_entries.name,input.val());
  // reRender(colPokemon,find,update);
  return container;
}

// const reRender = (colPokemon, find, update) => {
//   colPokemon.empty();
//
//   find.forEach((pokemon)=>{
//     colPokemon.append(pokemonItem(pokemon,update,_=> {reRender(rowContainer, find);}));
//
//   });
// }

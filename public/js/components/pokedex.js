'use strict';

const pokemonItem = (pokemon,update)=>{
  const divpokemon = $('<div class="col s4 l2 contPokemon"></div>');
  let id = pokemon.entry_number;
  let name= pokemon.pokemon_species.name;
  id = ("00"+ id).slice(-3);

  const img= $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png" alt="">`);
  const fondo= $(`<img  class="fondo" src="icon/notch-collectibles.png"></img>`);

  const detail = $('<div class="col s12"></div>');
  const icon = $('<div class="col s12 contIcon"></div>');
  const pokeball = $(`<a class="waves-effect waves-light pokeball" href="#modal1"><img class="icon"  src="icon/pokeball_gray.png"></img></a>`);
  const heart = $(`<img  class="icon" src="icon/valentines-heart.png"></img>`);
  const data = $(`<img class="icon"  src="icon/data.png"></img>`);
  const namePokemon = $(`<div class="col s12 center-align pokemon">${name}</div>`);

  icon.append(pokeball);
  icon.append(heart);
  icon.append(data);
  detail.append(icon);
  detail.append(namePokemon);

  divpokemon.append(img);
  divpokemon.append(fondo);
  divpokemon.append(detail);

  pokeball.on('click',(e) => {
    e.preventDefault();
    state.selectedPokemon = pokemon;
    modalEfec(pokemon,name,id);
  });

  return divpokemon;
}


const pokemonSearch= (update) =>{

  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row text"></div>');

  const rowPokemon = $('<div class="row text rowPokemon"></div>');
  const colPokemon = $('<div class="col s12"></div>');

  const colSearch = $('<div class="col s6 offset-s1"></div>');
  const label = '<i class="icon-search"></i>';
  const input = $('<input id="name" type="text" name="" value="" placeholder="">');

  const colButton = $('<div class="col s3 offset-s2 center-align"></div>');
  const button = $('<button type="button" class="btn-large" name="button">A - Z</button>');

  const contModal = $('<div class="col s12 cont-modal"></div>');
  colSearch.append(label);
  colSearch.append(input);
  colButton.append(button);

  row.append(colSearch);
  row.append(colButton);

  rowPokemon.append(colPokemon);
  rowPokemon.append(contModal);

  container.append(row);
  container.append(rowPokemon);

  $(input).on('keyup',(e) => {
    if($("input").val !== null ||''){
      const find = filterByPokemon(state.pokedex.pokemon_entries,$("input").val());
      reRender (colPokemon, find, update);
    }
  });

  let pokemonID = [];

  state.pokedex.pokemon_entries.forEach((pokemon) => {
    colPokemon.append(pokemonItem(pokemon,update));
  });

  button.on('click',(e)=>{
    const name = $(".contPokemon");

    for (var i = 0; i < name.length; i++) {
      pokemonID.push(name[i].innerText.toLowerCase());
    }

    pokemonID.sort();
    if (pokemonID!= '') {
      pokemonID.splice(0,pokemonID.length);
    }

    for (var b = 0; b < pokemonID.length; b++) {
      for (var f= 0; f < pokemonID.length; f++) {
        console.log("hola");
        console.log(name);
        if (pokemonID[b]==name[f].innerText) {
          colPokemon.empty();
          colPokemon.append(name[f]);

        }
      }
    }


  });

  return container;
}

const reRender = (colPokemon, find, update) => {
  colPokemon.empty();
  find.forEach((pokemon)=>{
    colPokemon.append(pokemonItem(pokemon,update,_=> {reRender(colPokemon, find);}));
  });
}

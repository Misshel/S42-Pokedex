'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(pokemonSearch( _ => {render(root);}));

root.append(wrapper);
}

const state = {
  pokedex: null,
  selectedPokemon: null,
  info:null,
  descOfPokemon:null
};

$( _ => {

  getJSON('https://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}
    state.pokedex = json;
    const root = $('#root');
    render(root);
  });
  getJSON('https://pokeapi.co/api/v2/pokemon-species/?limit=721&offset=0', (err, json) => {

    if (err) { return alert(err.message);}
    state.info = json;
  });

});

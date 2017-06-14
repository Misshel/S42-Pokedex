'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Pokedex(_ => render(root)));

  root.append(wrapper);
}

const state = {
  pokedex: null,
  pokemon: null
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokedex = json;
  });

  getJSON('http://pokeapi.co/api/v2/pokemon-species/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemon = json;
  });

  const root = $('.root');
  render(root);

});

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
  selectedPokemon: null
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}
    state.pokedex = json;
    const root = $('#root');
    render(root);
  });

});

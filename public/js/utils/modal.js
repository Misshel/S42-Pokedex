"use strict";

const modalEfec = (pokemon,name,id)=>{
  const modal = $(".cont-modal");
  modal.css("display","block");

  const modalCont = $('<div class="col s8 offset-s2 modal"></div>');
  const close = $('<span class="close"><img src="icon/cross-out.png" alt="X"></span>');

  const description = $('<div class="col s8 description"></div>');
  const title = $(`<h1 class="nameDesc">${name}</h1>`);

  const newDescription = filterByName(state.info.results,name);
  newDescription.forEach((pokemon)=>{
    getJSON(pokemon.url, (err, json) => {
      if (err) { return alert(err.message);}
      state.descOfPokemon = json;
      const infoIdioma = state.descOfPokemon.flavor_text_entries;
      let text = "";
      text =infoIdioma[3].flavor_text;
      const p =$(`<p>${text}</p>`);
      description.append(p);
    });
  });

  description.append(title);
  modalCont.append(close);
  modalCont.css("display","block");

  modal.append(modalCont);
  modalCont.append(pokemonItem(pokemon));
  modalCont.append(description);
  close.on("click",(e)=>{
    modal.css("display","none");
  });
}

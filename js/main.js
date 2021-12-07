let elPakemonGroups = document.querySelector('.groups__pakemon');
let elTemplatePakemon = document.querySelector('#pakemon-template').content;
let elTemplateFr = document.createDocumentFragment();
let allBtns = document.querySelector('.allbtn');
let oneBtns = document.querySelector('.onebtn');
let twoBtns = document.querySelector('.twobtn');
// ================================================================
for (let pakemon of pokemons.slice(0,100)) {
  let elPakemon = elTemplatePakemon.cloneNode(true);
  elPakemon.querySelector('.card__pakemon-imgs').src = pakemon.img;
  elPakemon.querySelector('.card__pakemon-title').textContent = pakemon.name;
  elPakemon.querySelector('.card__pakemon-text').textContent =  "#" + pakemon.num;
  // Fragmentni ichiga solish ma'lumotlarni
  elTemplateFr.appendChild(elPakemon)
}
elPakemonGroups.appendChild(elTemplateFr)
allBtns.addEventListener("click", function(){
  for (let pakemon of pokemons.slice(0,100)) {
    elPakemonGroups.innerHTML = ""
    let elPakemon = elTemplatePakemon.cloneNode(true);
    elPakemon.querySelector('.card__pakemon-imgs').src = pakemon.img;
    elPakemon.querySelector('.card__pakemon-title').textContent = pakemon.name;
    elPakemon.querySelector('.card__pakemon-text').textContent =  "#" + pakemon.num;
    elTemplateFr.appendChild(elPakemon)
  }
  elPakemonGroups.appendChild(elTemplateFr);
})
oneBtns.addEventListener("click", function(){
  for (let pakemon of pokemons.slice(0,50)) {
    elPakemonGroups.innerHTML = "";
    let elPakemon = elTemplatePakemon.cloneNode(true);
    elPakemon.querySelector('.card__pakemon-imgs').src = pakemon.img;
    elPakemon.querySelector('.card__pakemon-title').textContent = pakemon.name;
    elPakemon.querySelector('.card__pakemon-text').textContent =  "#" + pakemon.num;
    elTemplateFr.appendChild(elPakemon)
  }
  elPakemonGroups.appendChild(elTemplateFr)
})
twoBtns.addEventListener("click", function(){
  for (let pakemon of pokemons.slice(50,100)) {
    elPakemonGroups.innerHTML = "";
    let elPakemon = elTemplatePakemon.cloneNode(true);
    elPakemon.querySelector('.card__pakemon-imgs').src = pakemon.img;
    elPakemon.querySelector('.card__pakemon-title').textContent = pakemon.name;
    elPakemon.querySelector('.card__pakemon-text').textContent =  "#" + pakemon.num;
    // Fragmentni ichiga solish ma'lumotlarni
    elTemplateFr.appendChild(elPakemon)
  }
  elPakemonGroups.appendChild(elTemplateFr)
})
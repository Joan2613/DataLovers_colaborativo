//Ventana modal
function mostrarModal(event){ 
    const perfilPokemon = event.currentTarget.id;
    const encontrandoPokemon = personajes.find(elemento => elemento.num == perfilPokemon);
    const cajitaPokemon = document.createElement('div');
    const imgPokemon = document.createElement('img');
    const acercaDelPokemon = document.createElement('p');
    const nombrePokemon = document.createElement('p');
    const pesoPokemon = document.createElement('p');
    const tipoPokemon = document.createElement('p');
    const debilidadPokemon = document.createElement('p');
    // const evolucionPokemon = document.createElement('p');
    
    cajitaPokemon.id = 'modalDePokemon';
    cajitaPokemon.innerHTML = encontrandoPokemon.num;
    imgPokemon.src = encontrandoPokemon.img;
    nombrePokemon.innerHTML = encontrandoPokemon.name;
    acercaDelPokemon.innerHTML = encontrandoPokemon.about;
    pesoPokemon.innerHTML = encontrandoPokemon.size.weight;
    tipoPokemon.innerHTML = encontrandoPokemon.type
    debilidadPokemon.innerHTML = encontrandoPokemon.weaknesses;

    cajitaPokemon.appendChild(imgPokemon);
    cajitaPokemon.appendChild(nombrePokemon);
    cajitaPokemon.appendChild(acercaDelPokemon);
    cajitaPokemon.appendChild(pesoPokemon);
    cajitaPokemon.appendChild(tipoPokemon);
    cajitaPokemon.appendChild(debilidadPokemon);
    
    let modal = document.getElementById('miModal');
    modal.style.display='block';
    
    modal.appendChild(cajitaPokemon);
}

function cerrarModal(){
    const modal = document.getElementById("miModal");
    const cajitaPokemon = document.getElementById("modalDePokemon");
    modal.removeChild(cajitaPokemon);
    modal.style.display ='none';
}

function displayImages(startIndex,endIndex){
    for(let i = startIndex; i < endIndex; i++){
        let { name: nombrePersonajes, num: numeroPersonaje, img: imagenPersonajes } = personajes[i];
        
        let nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'tarjeta';

        let nuevaImagen = document.createElement('img');
        nuevaImagen.src = imagenPersonajes;

        let nuevoNombre = document.createElement('button');
        nuevoNombre.id = numeroPersonaje;
        nuevoNombre.className = 'nombrePokemon';
        nuevoNombre.innerHTML = nombrePersonajes;
        
        let nuevoNum = document.createElement('p');
        nuevoNum.innerHTML = numeroPersonaje;
        
        nuevoElemento.appendChild(nuevoNum);
        nuevoElemento.appendChild(nuevaImagen);
        nuevoElemento.appendChild(nuevoNombre);

        contenedorpersonajes.appendChild(nuevoElemento);

        let botonPokemon = document.getElementsByClassName('nombrePokemon');
        botonPokemon[i].addEventListener('click', mostrarModal);
        }
}

function loadMoreImages() {
    if (isLoading) return;
    
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
  
    if (endIndex >= personajes.length) {
      // All images have been loaded
      return;
    }
  
    isLoading = true;
  
    displayImages(startIndex, endIndex);
  
    currentPage++;
    isLoading = false;
  }

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      loadMoreImages();
    }
  }

// Attach scroll event listener to the window
window.addEventListener('scroll', handleScroll);

import data from './data/pokemon/pokemon.js';
const personajes = data.pokemon;

let imagesPerPage = 12;
let currentPage = 1;
let isLoading = false;

let contenedorpersonajes = document.getElementById("contenedor");
document.getElementById('contenedor').style.display='block';
loadMoreImages();
document.getElementById('cerrar').addEventListener('click', cerrarModal);
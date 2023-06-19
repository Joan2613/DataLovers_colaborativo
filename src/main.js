// import { filtrarNombre } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const personajes = data.pokemon;

// function desplegarPersonajes(){
//     for()
// }


function crearTarjetas(personajes){ 
    let contenedorpersonajes = document.getElementById("contenedor");
    contenedorpersonajes.innerHTML = '';
    for(let i = 0; i < personajes.length; i++){
        let nombrePersonajes = personajes[i].name;
        let numeroPersonaje = personajes[i].num;
        let imagenPersonajes = personajes[i].img;
        // let acercaPersonajes = personajes[i].about;

        

        let nuevoElemento = document.createElement('div');
        let nuevaImagen = document.createElement('img');
        let nuevoNombre = document.createElement('button');
        let nuevoNum = document.createElement('p');
        
        nuevoElemento.className = 'tarjeta';
        nuevoNombre.id = numeroPersonaje;
        nuevoNombre.className = 'nombrePokemon';
        nuevaImagen.src = imagenPersonajes;
        nuevoNombre.innerHTML = nombrePersonajes;
        nuevoNum.innerHTML = personajes[i].num;
        

        nuevoElemento.appendChild(nuevoNum);
        nuevoElemento.appendChild(nuevaImagen);
        nuevoElemento.appendChild(nuevoNombre);
        contenedorpersonajes.appendChild(nuevoElemento);

        let botonPokemon = document.getElementsByClassName('nombrePokemon');
        botonPokemon[i].addEventListener('click', mostrarModal);
    }
}

document.getElementById('contenedor').style.display='block';
crearTarjetas(personajes);

// //Ventana modal
function mostrarModal(event){
    const perfilPokemon = event.currentTarget.id;
    const encontrandoPokemon = personajes.find(elemento => elemento.num == perfilPokemon);
    const cajitaPokemon = document.createElement('div');
    const cerrarCajita = document.createElement('span');
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
    cerrarCajita.id = 'cerrar';
    cerrarCajita.className = 'close';
    cerrarCajita.innerHTML = '&times;';

    let modal = document.getElementById('miModal');

    modal.innerHTML = '';

    const elements = [cerrarCajita, imgPokemon, nombrePokemon, acercaDelPokemon, pesoPokemon, tipoPokemon, debilidadPokemon];

    elements.forEach((element) => {
    cajitaPokemon.appendChild(element);
    });
    
    
    modal.style.display='block';
    modal.appendChild(cajitaPokemon);
    
    
    document.getElementById('cerrar').addEventListener('click', cerrarModal);
    
    
}

// //cerrar ventana modal

    

function cerrarModal(){
    const modal = document.getElementById("miModal");
    const cajitaPokemon = document.getElementById("modalDePokemon");
    if (modal && cajitaPokemon) {
        modal.style.display = 'none';
        cajitaPokemon.remove();
    }
}

// const barraDeBusquedaInput = document.getElementById('filtrarBusqueda');
// barraDeBusquedaInput.addEventListener('keyup', realizarBusqueda);
// function realizarBusqueda(){
//   let valorIngresado = barraDeBusquedaInput.value;
//   console.log(valorIngresado);
//   let resultadoFiltro = filtrarNombre (valorIngresado, personajes);
//   crearTarjetas(resultadoFiltro);
// }

/*const tarjetaPrincipal = personajes.map(({num, name,}) => `${num} ${name}`);
console.log(tarjetaPrincipal);
const tarjetaPrincipal = personajes.map(({name, num}) => `${num} ${name}`);
console.log(tarjetaPrincipal);
console.log(encontrandoPokemon.evolution['prev-evolution'][0]);
*/
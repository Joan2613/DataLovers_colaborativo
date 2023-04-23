// estas funciones son de ejemplo


<<<<<<< HEAD
=======


>>>>>>> prueba
/*export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};*/

<<<<<<< HEAD
export const filtrarNombre = (name, Pokemons) => {
  return Pokemons.filter(Pokemon => Pokemon.name === name);
}

export const filtrarTipo = (tipo, Pokemons) => {
return Pokemons.filter (pokemon => pokemon.type === type);
}

//console.log(filterType);
=======
export const filtrarNombre = (name, pokemons) => {
  return pokemons.filter(pokemon => pokemon.name.includes(name));
}

export const filtrarDebilidad = (debilidad, pokemons) => {
  return pokemons.filter(pokemon => pokemon.weaknesses.includes(debilidad));
}

export const filtrarTipo = (opcionTipo, pokemons) => {
  return pokemons.filter (pokemon => pokemon.type.includes(opcionTipo));
}

function compararAparicion (firstItem, secondItem){
  return secondItem["spawn-chance"] - firstItem["spawn-chance"];
}
export const organizarAparicion = (pokemons) =>{
  return pokemons.sort (compararAparicion);
}
 
// const students = [
//   { name: "Alex",   grade: 15 },
//   { name: "Devlin", grade: 15 },
//   { name: "Eagle",  grade: 13 },
//   { name: "Sam",    grade: 14 },
// ];
// function compareGrades(firstItem, secondItem){
// 	return firstItem.grade - secondItem.grade;}
// const resultadoOrdenado =students.sort(compareGrades);
// console.log(resultadoOrdenado);

// export const arrayTop = (encounter, pokemons) => {
//   return pokemons.map (pokemons => pokemon.encounter== encounter);
// }
 
//  personajes.map(personajes => {
//     return personajes.encounter
//   })
  //console.log(encounter);
 /* if(opcionTipo == 0){
    const tipoGrass = Pokemons.filter (pokemon => pokemon.type.includes("grass"));
    return tipoGrass
  }  
  if(opcionTipo == 1){
    const tipoPoison = Pokemons.filter (pokemon => pokemon.type == "poison");
    return tipoPoison
  }  */
>>>>>>> prueba

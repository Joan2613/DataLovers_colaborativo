import { filtrarNombre} from '../src/data.js';

// import data from './data/pokemon/pokemon.js';

// const personajes = data.pokemon;



describe('prueba que filtrarNombre es una funcion  ', () => {
  it('is a function', () => {
    expect(typeof filtrarNombre).toBe('function');
  });

  it('pika retorna pikachu', () => {
    expect(personajes.filter(filtrarNombre).name).toBe('Pikachu');
  });
});


// describe('prueba que filtrarTipo es una funcion', () => {
//   it('is a function', () => {
//     expect(typeof filtrarTipo).toBe('function');
//   });

//   it('si selecionamos fire nos retorne un arra de 22`', () => {
//     expect(typeof anotherExample).toBe('function');
//   });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

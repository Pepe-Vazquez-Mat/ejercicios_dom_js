// 1.1 Botón con la clase .showme
const boton = document.querySelector('.showme')
console.log(boton)

// 1.2 h1 con el id #pillado
const h1 = document.querySelector('#pillado')
console.log(h1)

// 1.3 Todos los <p>
const parrafos = document.querySelectorAll('p')
console.log(parrafos)

// 1.4 Todos los elementos con la clase .pokemon
const pokemons = document.querySelectorAll('.pokemon')
console.log(pokemons)

// 1.5 Todos los elementos con el atributo data-function="testMe"
const personajes = document.querySelectorAll('[data-function="testMe"]')
console.log(personajes)

// 1.6 El 3er personaje con ese atributo (índice 2)
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2]
console.log(tercerPersonaje)

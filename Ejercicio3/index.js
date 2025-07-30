//1.1 – Crear una lista <ul><li> con países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ulCountries = document.createElement('ul')

countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ulCountries.appendChild(li)
})

document.body.appendChild(ulCountries)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me

const fnRemove = document.querySelector('.fn-remove-me')
if (fnRemove) fnRemove.remove()

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const carDiv = document.querySelector('[data-function="printHere"]')
const ulCars = document.createElement('ul')

cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ulCars.appendChild(li)
})

carDiv.appendChild(ulCars)

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; */

const countriesList = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const container = document.createElement('div') // contenedor general
container.id = 'country-container' // útil tb para eliminar luego en el ejercicio 5

countriesList.forEach((country) => {
  const countryDiv = document.createElement('div')

  const h4 = document.createElement('h4')
  h4.textContent = country.title

  const img = document.createElement('img')
  img.src = country.imgUrl
  img.alt = 'imagen aleatoria'

  countryDiv.appendChild(h4)
  countryDiv.appendChild(img)
  container.appendChild(countryDiv)
})

document.body.appendChild(container)

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */

const deleteLastBtn = document.createElement('button')
deleteLastBtn.textContent = 'Eliminar último div'

deleteLastBtn.addEventListener('click', () => {
  const container = document.getElementById('country-container')
  if (container.lastElementChild) {
    container.lastElementChild.remove()
  }
})

document.body.appendChild(deleteLastBtn)

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.
 */

const container2 = document.createElement('div') // contenedor general (2ª vez)

countriesList.forEach((country) => {
  const countryDiv = document.createElement('div')

  const h4 = document.createElement('h4')
  h4.textContent = country.title

  const img = document.createElement('img')
  img.src = country.imgUrl
  img.alt = 'imagen aleatoria'

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Eliminar este bloque'
  deleteBtn.addEventListener('click', () => {
    countryDiv.remove()
  })

  countryDiv.appendChild(h4)
  countryDiv.appendChild(img)
  countryDiv.appendChild(deleteBtn)
  container2.appendChild(countryDiv)
})

document.body.appendChild(container2)

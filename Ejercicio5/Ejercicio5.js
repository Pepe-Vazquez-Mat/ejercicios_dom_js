const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

// Creo la lista
const ul = document.createElement('ul')

// Creao cada <li> y tb añadirlo al <ul>
albums.forEach((album) => {
  const li = document.createElement('li')
  li.textContent = album
  ul.appendChild(li)
})

// Con esto inserto la lista en el contenedor del HTML
const container = document.getElementById('album-container')
container.appendChild(ul)

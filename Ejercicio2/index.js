// 2.1 Inserta dinámicamente un div vacío
const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

// 2.2 Inserta un div que contenga una p
const divConP = document.createElement('div')
const p1 = document.createElement('p')
p1.textContent = 'Soy un párrafo dentro de un div'
divConP.appendChild(p1)
document.body.appendChild(divConP)

// 2.3 Inserta un div que contenga 6 p usando un loop
const divCon6P = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Párrafo ${i}`
  divCon6P.appendChild(p)
}
document.body.appendChild(divCon6P)

// 2.4 Inserta una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement('p')
pDinamico.textContent = 'Soy dinámico!'
document.body.appendChild(pDinamico)

// 2.5 Inserta en el h2 con clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 2.6 Lista a partir del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 2.7 Elimina todos los nodos con la clase .fn-remove-me
document
  .querySelectorAll('.fn-remove-me')
  .forEach((elimino) => elimino.remove())

// 2.8 Inserta una p entre los dos <div>
const divs = document.querySelectorAll('body > div')
if (divs.length >= 2) {
  const pMedio = document.createElement('p')
  pMedio.textContent = 'Voy en medio!'
  divs[0].parentNode.insertBefore(pMedio, divs[1])
}

// 2.9 Inserta una p con el texto 'Voy dentro!' dentro de todos los div con clase .fn-insert-here
document.querySelectorAll('div.fn-insert-here').forEach((div) => {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
})

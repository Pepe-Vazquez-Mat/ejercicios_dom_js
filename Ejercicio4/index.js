/* 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click  (hecho tb en index.html*/

const btn = document.getElementById('btnToClick')
btn.addEventListener('click', (event) => {
  console.log('Evento click:', event)
})

/* 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

const inputFocus = document.querySelector('.focus')
inputFocus.addEventListener('focus', () => {
  console.log('Valor al hacer focus:', inputFocus.value)
})

/* Evento con input */

// 4.3 Evento 'input'
const inputValue = document.querySelector('.value')
inputValue.addEventListener('input', () => {
  console.log('Valor mientras escribes:', inputValue.value)
})

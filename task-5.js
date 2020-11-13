const inputName = document.querySelector('#name-input')
const spanName = document.querySelector('#name-output')
inputName.addEventListener('input',() => {
 inputName.value.length > 0? spanName.textContent = inputName.value :  spanName.textContent = 'незнакомец'  
})

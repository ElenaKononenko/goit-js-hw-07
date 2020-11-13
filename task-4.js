let counterValue = 0
const increment = document.querySelector('[data-action="increment"]')
const decrement = document.querySelector('[data-action="decrement"]')
const value = document.querySelector('#value')

const incrementFunc = () => {
    counterValue +=1,
    value.textContent = counterValue}
const decrementFunc = () => {
     counterValue -=1,
     value.textContent = counterValue}

increment.addEventListener('click', incrementFunc )
decrement.addEventListener('click', decrementFunc)





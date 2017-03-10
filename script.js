'use strict'
const expression = document.getElementById('expression')
const output = document.getElementById('output')

expression.addEventListener('change', result, false)
document.getElementById('calculate').addEventListener('click', result, false)

function result () {
  try {
    output.textContent = eval(expression.value)
  } catch (error) {
    output.textContent = error
  }
}

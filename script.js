'use strict'
const expression = document.getElementById('expression')
const output = document.getElementById('output')

document.getElementById('calculate').addEventListener('click', result, false)

function result () {
  output.textContent = eval(expression.value)
}

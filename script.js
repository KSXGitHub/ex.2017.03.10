'use strict'

const aInput = document.getElementById('a')
const bInput = document.getElementById('b')
const kqCongOutput = document.getElementById('kq-cong')
const kqTruOutput = document.getElementById('kq-tru')
const kqNhanOutput = document.getElementById('kq-nhan')
const kqChiaOutput = document.getElementById('kq-chia')

const ketqua = () => {
  const a = Number(aInput.value)
  const b = Number(bInput.value)
  kqCongOutput.textContent = a + b
  kqTruOutput.textContent = a - b
  kqNhanOutput.textContent = a * b
  kqChiaOutput.textContent = a / b
}

document.getElementById('calc').addEventListener('click', ketqua, false)
aInput.addEventListener('change', ketqua, false)
bInput.addEventListener('change', ketqua, false)


function ketqua()
{
  const a = document.getElementById('so1')
  const b = document.getElementById('so2')
  const so1 = a.value
  const so2 = b.value
if(so1 == "" || isNaN(so1))
{
alert("Nhập sai. Nhập lại!");
document.getElementById("so1").focus()
return false
}
else if(so2== "" || isNaN(so2))
{
alert("Vui long nhap gia tri so' cho so 2!")
document.getElementById("so2").focus()
return false
}
const kqc = so1+so2
const kqt = so1-so2
const kqn = so1*so2


document.getElementById("kqc").value = kqc
document.getElementById("kqt").value = kqt
document.getElementById("kqn").value = kqn
if(so2 == 0)
{
alert("Số thứ 2 bằng không không thực hiện chia được!")
document.getElementById("kqch").value = "Error"
return false
}
else
{
var kqch = so1/so2
document.getElementById("kqch").value = kqch
}
}
  function KtEnter()
  {
    document.onkeypress = function(e) {
    keycode = e.which
    if(keycode == 13) {
    ketqua()
    }
  }
}

console.log('Hello World!');
let a = document.getElementById('idik')
console.log(a)
console.log(typeof a)
function gettxt(){
  var b = document.getElementById('idik').value;
  console.log(b);
  console.log(typeof b);
  if (document.getElementById('def').checked == true){
    window.alert(b)
  }
  else if (document.getElementById('conf').checked == true){
    if (window.confirm(b) == true){
      document.getElementById('h3').innerHTML = 'Вы подтвердили\nуведомление!'
    }
    else {
      document.getElementById('h3').innerHTML = 'Вы не подтвердили\nуведомление!'
    }
  }
}

let fullname = prompt('Ad Soyad:')
let greeting = document.querySelector('#greeting');
greeting.innerHTML = `${greeting.innerHTML} <b>${fullname}</b>`
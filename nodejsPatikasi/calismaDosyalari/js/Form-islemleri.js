let form = document.querySelector('#fullname')


let name = document.querySelector('#name')
let last_name = document.querySelector('#last_name')
// last_name.addEventListener('submit',gonder)
form.addEventListener('submit',gonder)
function gonder(event) {
    event.preventDefault();
    let paraf = document.querySelector('#paraf');
    paraf.innerHTML=`<h1> ${name.value} ${last_name.value}</h1>`
}


// function gonder(event) {
//     event.preventDefault();
//     console.log(`${name} ${last_name}`)
// }





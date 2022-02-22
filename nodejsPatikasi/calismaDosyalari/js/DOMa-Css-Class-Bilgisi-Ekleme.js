

let greeting = document.querySelector('#greeting');

greeting.classList.add('text-success','fs-1')

greeting.classList.add('text-center')

function changeDark() {
    let text = document.querySelector('#text')
    text.classList.add('text-light','fs-3','bg-dark')
    text.innerHTML="Muammer Diri"

}
function changeLight() {
    let text = document.querySelector('#text')
    text.classList.add('fs-3')
    text.innerHTML="Muammer Diri"
}
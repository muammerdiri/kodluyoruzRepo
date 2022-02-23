let greeting = document.querySelector('#greeting')
greeting.addEventListener('click',click)

function click() {
    this.style.color=="red"? this.style.color="blue":this.style.color="red"
}
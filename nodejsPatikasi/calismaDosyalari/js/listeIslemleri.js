let firstElement = document.querySelector('ul#list>li:first-child')
firstElement.innerHTML ="İlk elemet değişti"


let lastElement = document.querySelector('ul#list>li:last-child')
lastElement.innerHTML ="Son elemet değişti"


function append() {
    let ulDom = document.querySelector('ul#list');
    let liDom = document.createElement('li');
    let inputText = document.getElementById('text') 
    liDom.innerHTML = inputText.value;

    ulDom.prepend(liDom)
}

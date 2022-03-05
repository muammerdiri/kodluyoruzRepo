let formGroup = document.querySelector('#formGroup');
formGroup.addEventListener('submit' ,formHandle);

function formHandle(event) {
    event.preventDefault();
    const username = document.querySelector('#username');
    const score = document.querySelector('#score');
    addList(username.value,score.value);
}
let list = document.querySelector('#list');
function addList(username,score) {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${username} ${score}`
    list.append(liDOM);
}
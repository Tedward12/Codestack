


let close = document.getElementsByClassName("close");
let myNodelist = document.getElementsByClassName("list-group-item");
let clear = document.getElementById('clear');
let addList = document.getElementById('addList');
let keyPress = document.getElementById('keypress');
let addElements = document.getElementById('addElements');
let todoList = [];

clear.addEventListener('click', function (e) {
  localStorage.clear();
  location.reload();
});

addList.addEventListener('click', function (e) {

});

keyPress.addEventListener('keypress', function (e) {
  if (e.code == 'Enter' && keyPress.value != '') {
    addPElement(keyPress.value);
    todoList.push(keyPress.value);
    localStorage.setItem('todo', JSON.stringify(todoList));
    keyPress.value = "";
  }
});

function addPElement(content) {
  let pElement = document.createElement('p');
  pElement.innerText = content;
  addElements.append(pElement);
  pElement.setAttribute('class', 'list-group-item')
  pElement.setAttribute('id', 'pCounter');

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  pElement.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
      localStorage.removeItem('todo', JSON.stringify(todoList[i]))
    }
  }
}

if (localStorage.getItem('todo') != '') {
  let toDoLocal = JSON.parse(localStorage.getItem('todo'));
  for (let i = 0; i < toDoLocal.length; i++) {
    addPElement(toDoLocal[i]);
  }
  todoList = toDoLocal;
}
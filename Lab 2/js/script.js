


let title = document.getElementById('title');
let close = document.getElementsByClassName("close");
let myNodelist = document.getElementsByClassName("list-group-item");
let clear = document.getElementById('clear');
let saveList = document.getElementById('addList');
let keyPress = document.getElementById('keypress');
let addElements = document.getElementById('addElements');
let todoList = [];
let titleStorage = ["Untitled List"]; 

title.addEventListener('click',function(){
    title.contentEditable = "true";
});

clear.addEventListener('click', function (e) {
  localStorage.clear();
  location.reload();
});

saveList.addEventListener('click', function (e) {
  addTitle();
  addTitle();
});

keyPress.addEventListener('keypress', function (e) {
  if (e.code == 'Enter' && keyPress.value != '') {
    addPElement(keyPress.value);
    todoList.push(keyPress.value);
    localStorage.setItem('todo', JSON.stringify(todoList));
    keyPress.value = "";
  }
});

function addTitle(){
  titleStorage.splice(0,2)
  titleStorage.push(title.innerText);
  localStorage.setItem('title', JSON.stringify(titleStorage));
}

function reloadTitle(titleName){
  title.innerText = "Untitled List";
  title.innerText = titleName;
}

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
      todoList.splice(i,1);
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  }
}

if (localStorage.getItem('todo') != '') {
  let titleLocal = JSON.parse(localStorage.getItem('title'))
  let toDoLocal = JSON.parse(localStorage.getItem('todo'));
  for (let i = 0; i < toDoLocal.length; i++) {
    addPElement(toDoLocal[i]);
  }
  reloadTitle(titleLocal);
  titleStorage = titleLocal;
  todoList = toDoLocal;
}
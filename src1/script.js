const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

const items = []
const uncheckedItems = []

var ul = document.querySelector('ul')
ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    if (ev.target.classList.toggle('checked')) {
      uncheckedItems.push(uncheckedItems.length + 1)
      uncheckedCountSpan.innerHTML = uncheckedItems.length
    } else {
      uncheckedItems.pop()
      uncheckedCountSpan.innerHTML = uncheckedItems.length
    }
  }
}, false);

function insertTodo(text) {
  classNames.TODO_ITEM = ''
  classNames.TODO_CHECKBOX = ''
  classNames.TODO_TEXT = text
  classNames.TODO_DELETE = false

  items.push(classNames)
    
  var li = document.createElement("li")
  li.setAttribute('id', classNames.TODO_TEXT)
  li.appendChild(document.createTextNode(classNames.TODO_TEXT))
  list.appendChild(li)

  itemCountSpan.innerHTML = items.length
}

function newTodo() {
  var text = prompt("Create TODO")

  if (!(text === null)) {
    if (text === "") {
      newTodo()
    } else {
      insertTodo(text)
    }
  }
}

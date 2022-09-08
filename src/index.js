// /** @function _update
//  * @param { number } id
//  * @param { string } [contents]
//  * @param { boolean } [isCompleted]
//  * @param { string } [category]
//  * @param { number[] } [tagIndex]
//  * @param { string[] } [tags]
//  */
// function _update(id, contents, isCompleted, category, tagIndex, tags) {}

//  /** @function _delete
//  * @param { number } id
//  * @param { string[] } [tags]
//  */
// function _delete(id, tags) {}



/**
 * @typedef { Object } todo
 * @property { number } id 
 * @property { string } contents
 * @property { boolean } isCompleted
 * @property { string } category
 * @property { string[] } [tags]
 */
// let todo = { id: '', contents: '', isCompleted: false, category: '', tags: ''}

/**
 * @typedef { Array } todos
 * @type { Array<todo> }
 */
let todos = [{ id: 2, contents: 'awer', isCompleted: false, category: '', tags: ''}]

let contents = ''


// Selectors
document.addEventListener("DOMContentLoaded", getTodos)
const categoryOptions = document.querySelector(".todo-category")
const tagOptions = document.querySelector(".todo-tags")
const todoContents = document.querySelector(".todo-contents")

const todoList = document.querySelector(".todo-list")

const test = document.createElement("li")
test.innerHTML = 'asdlkjfjalskdjf'
todoList.appendChild(test)



const form = document.querySelector("#form").addEventListener("submit", function(e) {
      e.preventDefault()
      const { contents, category, tags} = this
      _create(todos.length, contents.value, category.value, tags.value)
});

/** @function _create
 *  @param { number } id
 *  @param { string } [contents]
 *  @param { string } category
 *  @param { string[] } [tags]
 */
function _create(id, contents, category, tags) {
  todos.push({
    id, contents, category, isCompleted: false, tags
  })
  getTodos()
}

function getTodos () {
  for(let el of todos) {
    console.log(el)
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("li");
    newTodo.innerText = el.contents;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = el.id;

    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  }


}













// /** @function _read
//  * @param { number } id
//  * @returns { Todo } Todo
//  */
// function _read(id) { return Todo }

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function(todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//     }
//   });
// }
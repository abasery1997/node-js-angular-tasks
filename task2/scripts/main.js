const input_form = document.querySelector('.new-todo-form')
const newTodo = document.querySelector('.new-todo')
const container = document.querySelector('.todos-container')
let fetchedTodoNum = 10;


// create li with the title of the todo
const createTodo = (value, id, completed) => {
    const todo = document.createElement('li')
    todo.textContent = value;
    const delbtn = document.createElement('button')
    delbtn.textContent = 'finished';
    todo.id = id;
    todo.setAttribute("completed", completed);
    todo.appendChild(delbtn)
    container.appendChild(todo)
    delbtn.addEventListener('click', () => {
        container.removeChild(todo);

    })

}


//fetch the todo from our facke api 
fetch("http://127.0.0.1:3300/fetched")
    .then((response) => response.json())
    .then((todos) => {
        for (let i = 0; i < fetchedTodoNum; i++) {
            createTodo(todos[i].title, todos[i].id, todos[i].completed);
        }
    })
let id = fetchedTodoNum;
//add new todo
input_form.addEventListener('submit', (e) => {
    e.preventDefault();
    //  const id = Date.now();
    const completed = Math.random() < 0.5;
    if (newTodo.value.trim()) {
        id++;
        createTodo(newTodo.value, id, completed);
        newTodo.value = ''
    } else {
        alert("enter the todo title ")
    }

})
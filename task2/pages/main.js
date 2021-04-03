const input_form = document.querySelector('.new-todo-form')
const newTodo = document.querySelector('.new-todo')
const container = document.querySelector('.todos-container')



// create li with the title of the todo
const createTodo = (value) => {
    const todo = document.createElement('li')
    todo.textContent = value;
    const delbtn = document.createElement('button')
    delbtn.textContent = 'finished';
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
        for (let i = 0; i < 10; i++) {
            createTodo(todos[i].title);
        }
    })

//add new todo
input_form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTodo(newTodo.value);
})
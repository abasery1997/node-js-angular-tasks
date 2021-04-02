const input_form = document.querySelector('.new-todo-form')
const newTodo = document.querySelector('.new-todo')
const container = document.querySelector('.todos-container')


const todoArray = []

const showTodos = () => {
    container.textContent = '';
    for (let i = 0; i < todoArray.length; i++) {
        const todo = document.createElement('li')
        todo.textContent = todoArray[i];
        const delbtn = document.createElement('button')
        delbtn.textContent = 'finished';
        todo.appendChild(delbtn)
        container.appendChild(todo)
        delbtn.addEventListener('click', () => {
            container.removeChild(todo);
            todoArray.splice(i, 1);

        })
    }


}


fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todos) => {
        for (let i = 0; i < 10; i++) {
            todoArray.push(todos[i].title);
        }
        showTodos()
    })


input_form.addEventListener('submit', (e) => {
    e.preventDefault();
    todoArray.push(newTodo.value);
    showTodos()
})
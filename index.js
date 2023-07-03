const form = document.getElementById('todo-form');
        const todoList = document.getElementById('todo-list');

        let todos = [];

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const descriptionInput = document.getElementById('description');
            const startDateInput = document.getElementById('start-date');
            const endDateInput = document.getElementById('end-date');

            const todo = {
                name: nameInput.value,
                description: descriptionInput.value,
                startDate: startDateInput.value,
                endDate: endDateInput.value
            };

            if (editIndex !== -1) {
                todos[editIndex] = todo;
                editIndex = -1;
            } else {
                todos.push(todo);
            }

            renderTodoList();
            form.reset();
        });

        let editIndex = -1;

        function renderTodoList() {
            todoList.innerHTML = '';

            todos.forEach(function(todo, index) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${todo.name}</h3>
                    <p>${todo.description}</p>
                    <p><strong>Data de Início:</strong> ${todo.startDate}</p>
                    <p><strong>Data Fim:</strong> ${todo.endDate}</p>
                    <button class="botao" onclick="editTodo(${index})">Editar</button>
                    <button class="botao" onclick="deleteTodo(${index})">Excluir</button>
                `;
                todoList.appendChild(li);
            });
        }

        function editTodo(index) {
            const todo = todos[index];

            const nameInput = document.getElementById('name');
            const descriptionInput = document.getElementById('description');
            const startDateInput = document.getElementById('start-date');
            const endDateInput = document.getElementById('end-date');

            nameInput.value = todo.name;
            descriptionInput.value = todo.description;
            startDateInput.value = todo.startDate;
            endDateInput.value = todo.endDate;

            editIndex = index;
        }

        function deleteTodo(index) {
            todos.splice(index, 1);
            renderTodoList();
        }
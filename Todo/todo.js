class Todo {
    constructor() {
        this.tasks = [];
    }

    add(task) {
        this.tasks.push(task);
    }

    remove(idxOfTask) {
        if (idxOfTask >= 0 && idxOfTask < this.tasks.length) {
            this.tasks.splice(idxOfTask, 1);
        }
    }

    update(idxOfTask, updatedTask) {
        if (idxOfTask >= 0 && idxOfTask < this.tasks.length) {
            this.tasks[idxOfTask] = updatedTask;
        }
    }

    getAll() {
        return this.tasks;
    }

    clear() {
        this.tasks.length = 0;
    }
}

// Instantiate the Todo class
const todo = new Todo();

// Get references to HTML elements
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const updateBtn = document.getElementById('update-btn');
const seeAllBtn = document.getElementById('see-all-btn');
const clearBtn = document.getElementById('clear-btn');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');



// Add Task
addBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
        todo.add(task);
        taskInput.value = '';
        updateTaskList();
    } else {
        alert('You must write something!');
    }
});
// Remove Task
removeBtn.addEventListener('click', () => {
    const idxInput = prompt('Enter the index of the task to remove:');

    if (idxInput !== null) {
        const idx = parseInt(idxInput);

        // Check if the entered index is valid
        if (!isNaN(idx)) {
            todo.remove(idx);
            updateTaskList();
        } else {
            alert('Invalid index. Please enter a valid number.');
        }
    }
});
// Update Task
updateBtn.addEventListener('click', () => {
    const idx = prompt('Enter the index of the task to update:');
    const updatedTask = prompt('Enter the updated task:');
    todo.update(idx, updatedTask);
    updateTaskList();
});

// See All Tasks
seeAllBtn.addEventListener('click', () => {
    alert(JSON.stringify(todo.getAll()));
});

// Clear All Tasks
clearBtn.addEventListener('click', () => {
    todo.clear();
    updateTaskList();
});

//Update Task List and see All Tasks seperately
function updateTaskList() {
    const tasks = todo.getAll();
    taskList.innerHTML = '';
    tasks.forEach((task, idx) => {
        const li = document.createElement('li');
        li.textContent = `${idx}: ${task}`;

        li.addEventListener('click', () => {
            alert(task);
        });

        li.addEventListener('mouseover', () => {
            li.style.cursor = 'pointer';
            li.style.textDecoration = 'underline';
        });

        li.addEventListener('mouseout', () => {
            li.style.textDecoration = 'none';
        });

        taskList.appendChild(li);
    });
}

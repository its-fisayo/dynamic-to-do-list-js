document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function createTaskElement(taskText) {
         //Create new list element
        const task = document.createElement("li");
        task.textContent = taskText;

        //Create remove button
        const button = document.createElement("button");
        button.textContent = "Remove";
        button.classList.add("remove-btn");

        button.onclick = function() {
            taskList.removeChild(task);

            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        };

        //Append button to list item then list item to list
        task.appendChild(button);
        taskList.appendChild(task);
    }

    function loadTasks() {
        tasks.forEach(task => createTaskElement(task));
    }


    //define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        //Check if the input is empty
        if (taskText === "") {
            alert("Enter a Task");
            return;
        }
        
        createTaskElement(taskText);

        tasks.push(taskText);
        saveTasks();

        taskInput.value = "";
    }
    

    //Add event listeners
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    loadTasks();
});
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    //define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        //Check if the input is empty
        if (taskText === "") {
            alert("Enter a Task");
            return;
        }
        
        //Create new list element
        const task = document.createElement("li");
        task.textContent = taskText;

        //Create remove button
        const button = document.createElement("button");
        button.textContent = "Remove";
        button.className = "remove-btn";

        button.onclick = function() {
            taskList.removeChild(task);
        };

        //Append button to list item then list item to list
        task.appendChild(button);
        taskList.appendChild(task);

        //Clear input field
        taskInput.value = "";
    }

    //Add event listeners
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
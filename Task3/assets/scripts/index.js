function addTask() {
    const InputOfTask = document.getElementById("taskInput");
    const ListOfTask = document.getElementById("taskList");

    if (InputOfTask.value === "") {
        alert("Please enter a task.");
        return;
    }

    const NewRow = document.createElement("tr");

    const CompleteOfCell = document.createElement("td");
    const CompleteOfCheckbox = document.createElement("input");
    CompleteOfCheckbox.type = "checkbox";
    CompleteOfCell.appendChild(CompleteOfCheckbox);
    NewRow.appendChild(CompleteOfCell);

    const taskCell = document.createElement("td");
    taskCell.textContent = InputOfTask.value;
    NewRow.appendChild(taskCell);

    const DeleteOfCell = document.createElement("td");
    const DeleteOfButton = document.createElement("button");
    DeleteOfButton.className = "delete-btn";
    DeleteOfButton.textContent = "❌";
    DeleteOfButton.onclick = function() {
        ListOfTask.removeChild(NewRow);
    };
    DeleteOfCell.appendChild(DeleteOfButton);
    NewRow.appendChild(DeleteOfCell);

    ListOfTask.appendChild(NewRow);
    InputOfTask.value = "";
}
let inputBox = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");

const removeTask = e => {
    e.target.closest(".task").remove();
}

const addTask = e => {
    tasksList.innerHTML += `<div class="task">
        <div clas="task__title">
            ${inputBox.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;

    inputBox.value = "";

    [...(tasksList.getElementsByClassName("task__remove"))].forEach(element => {
        element.addEventListener("click", removeTask)
    });

    e.preventDefault();
}

document.getElementById("tasks__add").addEventListener("click", addTask);
inputBox.addEventListener("keypress", e => {
    if (e.keyCode == 13) addTask(e);
});
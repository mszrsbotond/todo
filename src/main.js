import "./style.css"
import addForm from "./addForm.js"
import { createProject, projects, Task } from "./logic.js"
import { addProject } from "./addProject.js"


const addTaskButton = document.querySelector(".add-task-button")

const addProjectButton = document.querySelector("#projectButton")

addTaskButton.addEventListener("click", () => {
    addForm()
    let form = document.querySelector("form")
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let title = form.elements["title"].value
        let desc = form.elements["description"].value
        let due = form.elements["dueDate"].value
        let priority = form.elements["priority"].value
        let status = form.elements["status"].value
        let project = form.elements ["project"].value

        let newTask = new Task(title, desc, due, priority, status, project)
        newTask.addToProject()
    })
})

addProjectButton.addEventListener("click", () => {
    addProject()
    let form = document.querySelector("form")
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        createProject(form.elements["title"].value)
    })
})
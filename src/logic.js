export var projects;

export function saveToStorage() {
    localStorage.setItem("projects", JSON.stringify(projects))
}

export function loadFromStorage(){
    projects = JSON.parse(localStorage.getItem("projects"))
}

export class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }
}

export function createProject(name) {
    const project = new Project(name)
    projects.push(project)
    saveToStorage()
}

if (JSON.parse(localStorage.getItem("projects")) == null) {
    projects = []
    createProject("To Do")
}
else {
    loadFromStorage()
}

export class Task {
    constructor(title, description, dueDate, priority, status, project) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.status = status
        this.project = project
    }

    addToProject() {
        projects.forEach(project => {
            if (project.name == this.project) {
                project.tasks.push(this)
                saveToStorage()
            }
        })
    }


}

export function completeTask(task) {
    projects.forEach(project => {
        if (project.name === task.project) {
            const index = project.tasks.findIndex(t =>
                t.title === task.title &&
                t.description === task.description &&
                t.dueDate === task.dueDate &&
                t.priority === task.priority &&
                t.status === task.status &&
                t.project === task.project)
            if (index > -1) {
                project.tasks.splice(index, 1)
                saveToStorage()
            }
        }
    })
}
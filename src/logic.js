export var projects;

export class Project {
    constructor(name){
        this.name = name
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task)    
    }
}

export function createProject(name){
    const project = new Project(name)
    projects.push(project)
    localStorage.setItem("projects", JSON.stringify(projects))
    console.log(JSON.parse(localStorage.getItem("projects")))
}

if (JSON.parse(localStorage.getItem("projects")) == null) {
    projects = []
    createProject("To Do")
}
else {
    projects = JSON.parse(localStorage.getItem("projects"))
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

    addToProject(){
        projects.forEach(project => {
            if(project.name == this.project){
                project.addTask(this)
            }
        })
    }
}
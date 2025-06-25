import { projects } from "./logic";

const screen = document.querySelector(".main-screen")

export default function addForm() {
    screen.innerHTML = ``

    const form = document.createElement("form");

    // --- Title ---
    let titleContainer = document.createElement("div");
    titleContainer.className = "title-container";
    let titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.htmlFor = "title";
    let titleInput = document.createElement("input");
    titleInput.id = "title";
    titleInput.className = "title-input";
    titleInput.required = true;
    titleInput.placeholder = "Water the plants";
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);
    form.appendChild(titleContainer);

    // --- Description ---
    let descContainer = document.createElement("div");
    descContainer.className = "description-container";
    let descLabel = document.createElement("label");
    descLabel.textContent = "Description";
    descLabel.htmlFor = "description";
    let descInput = document.createElement("input");
    descInput.id = "description";
    descInput.className = "description-input";
    descInput.required = true;
    descInput.placeholder = "Add more details...";
    descContainer.appendChild(descLabel);
    descContainer.appendChild(descInput);
    form.appendChild(descContainer);

    // --- Due Date ---
    let dateContainer = document.createElement("div");
    dateContainer.className = "date-container";
    let dateLabel = document.createElement("label");
    dateLabel.textContent = "Due Date";
    dateLabel.htmlFor = "dueDate";
    let dateInput = document.createElement("input");
    dateInput.id = "dueDate";
    dateInput.type = "date";
    dateInput.className = "date-input";
    dateInput.required = true;
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);
    form.appendChild(dateContainer);

    // --- Priority ---
    let priorityContainer = document.createElement("div");
    priorityContainer.className = "priority-container";
    let priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";
    priorityLabel.htmlFor = "priority";
    let prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    prioritySelect.className = "priority-select";
    prioritySelect.required = true;

    ["Low", "Medium", "High"].forEach(level => {
        let option = document.createElement("option");
        option.value = level.toLowerCase();
        option.textContent = level;
        prioritySelect.appendChild(option);
    });

    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(prioritySelect);
    form.appendChild(priorityContainer);

    // --- Status ---
    let statusContainer = document.createElement("div");
    statusContainer.className = "status-container";
    let statusLabel = document.createElement("label");
    statusLabel.textContent = "Status";
    statusLabel.htmlFor = "status";
    let statusSelect = document.createElement("select");
    statusSelect.id = "status";
    statusSelect.className = "status-select";
    statusSelect.required = true;

    ["Not Started", "In Progress", "Done"].forEach(status => {
        let option = document.createElement("option");
        option.value = status.toLowerCase().replace(" ", "-");
        option.textContent = status;
        statusSelect.appendChild(option);
    });

    statusContainer.appendChild(statusLabel);
    statusContainer.appendChild(statusSelect);
    form.appendChild(statusContainer);

    // --- project ---
    let projectContainer = document.createElement("div");
    projectContainer.className = "project-container";
    let projectLabel = document.createElement("label");
    projectLabel.textContent = "project";
    projectLabel.htmlFor = "project";
    let projectSelect = document.createElement("select");
    projectSelect.id = "project";
    projectSelect.className = "project-select";
    projectSelect.required = true;

    projects.forEach(project => {
        let option = document.createElement("option");
        option.value = project.name
        option.textContent = project.name;
        projectSelect.appendChild(option);
    });

    projectContainer.appendChild(projectLabel);
    projectContainer.appendChild(projectSelect);
    form.appendChild(projectContainer);

    // submit
    let submitContainer = document.createElement("div")
    submitContainer.className = "submit"
    let submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Add Task"

    submitContainer.appendChild(submit)
    form.appendChild(submitContainer)

    // Add to screen
    screen.appendChild(form);
}
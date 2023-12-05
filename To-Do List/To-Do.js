document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('AddButton');
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    addButton.addEventListener('click', function (event) {
        event.preventDefault();

        const taskName = taskInput.value.trim();
        if (taskName !== '') {
            const taskItem = createTaskItem(taskName+' ');
            pendingList.appendChild(taskItem);

            // Clear input field after adding task
            taskInput.value = '';
        }
    });

    function createTaskItem(taskName) {
        const li = document.createElement('li');
        li.textContent = taskName;

        const tickButton = document.createElement('button');
        tickButton.textContent = '✔';
        tickButton.classList.add('tick-button');
        tickButton.addEventListener('click', function () {
            moveTaskToCompleted(li);
        });

        li.appendChild(tickButton);
        return li;
    }

    function moveTaskToCompleted(taskItem) {
        // Check if the task is in Pending-Tasks or Completed-Tasks
        const isInPending = taskItem.parentNode === pendingList;

        if (isInPending) {
            // Remove tick button and move to Completed-Tasks
            const tickButton = taskItem.querySelector('button');
            taskItem.removeChild(tickButton);

            const crossButton = createCrossButton(taskItem);
            taskItem.appendChild(crossButton);
            completedList.appendChild(taskItem);
        } else {
            // Remove from Completed-Tasks
            completedList.removeChild(taskItem);
        }
    }

    function createCrossButton(taskItem) {
        const crossButton = document.createElement('button');
        crossButton.textContent = '✖';
        crossButton.classList.add('cross-button');
        crossButton.addEventListener('click', function () {
            // Remove the task when the cross button is clicked
            completedList.removeChild(taskItem);
        });
        return crossButton;
    }
});
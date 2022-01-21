// Arrays to keep track of each task's state
// const taskState = {
//   taskTitles: [],
//   taskDescriptions: [],
//   taskComplete: [],
//   newTask: function (title, description) {
//     this.taskTitles.push(title);
//     this.taskDescriptions.push(description);
//     this.taskComplete.push(false);
//   },
// };

const tasks = [];
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,
    markCompleted: function () {
      this.complete = true;
    },
    logState: function () {
      // tasks[taskIndex].taskComplete
      // const complete = tasks[taskIndex].taskComplete;
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    pushTask: function () {
      tasks.push(task);
    },
  };
  return task;
};

// Create a new task by adding to the arrays
// A new task will be created as incomplete

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "Wash your clothes lazy boy"); // task 1
// console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.pushTask();
task2.pushTask();
console.log(tasks);
task1.logState(); // Clean Cat Litter has been completed
// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed.`);
    },
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed
console.log(tasks);

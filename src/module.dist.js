class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  dump() {
    console.log(this.tasks);
  }
}

new TaskCollection([
  'eat dinner',
  'go to bed',
  'go to sleep'
]).dump();
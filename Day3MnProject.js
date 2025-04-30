// Initial array of tasks
const tasks = [
    { name: "Study", priority: 3 },
    { name: "Shop", priority: 1 },
    { name: "Call", priority: 2 }
  ];
  
  // Closure to keep track of how many times prioritizeTasks is called
  const createTaskManager = () => {
    let counter = 0;
  
    // Arrow function to prioritize tasks
    const prioritizeTasks = (taskList, minPriority = 1) => {
      counter++;
      const filtered = taskList
        .filter(task => task.priority >= minPriority)
        .sort((a, b) => b.priority - a.priority);
      console.log(`Call ${counter}:`);
      console.log(filtered);
      return filtered;
    };
  
    return prioritizeTasks;
  };
  
  // Create an instance of the task manager
  const prioritizeTasks = createTaskManager();
  
  // Test with different minimum priorities
  prioritizeTasks(tasks, 2);  // Call 1
  prioritizeTasks(tasks);     // Call 2
  
  Call 1:
[
  { name: 'Study', priority: 3 },
  { name: 'Call', priority: 2 }
]
Call 2:
[
  { name: 'Study', priority: 3 },
  { name: 'Call', priority: 2 },
  { name: 'Shop', priority: 1 }
]

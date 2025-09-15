import { Task } from './types';

function saveTasks(tasks: Task[]) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function fetchTasks(filter?: string): Task[] {
  let tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  filter = filter?.toLowerCase();

  if (filter) {
    tasks = tasks.filter(task =>
      task.title.toLowerCase().includes(filter) ||
      task.description.toLowerCase().includes(filter) ||
      task.assignee.toLowerCase().includes(filter) ||
      task.tags.some(tag => tag.toLowerCase().includes(filter))
    );
  }
  return tasks;
}

export function fetchTask(id: string): Task | undefined {
  let tasks: Task[] = fetchTasks();

  return tasks.find(task => task.id === id);
}

export function createTask(newTask: Partial<Task>): Task[] {
  let tasks: Task[] = fetchTasks();

  newTask.id = (localStorage.getItem('taskIdCounter') || tasks.length + 1).toString();
  localStorage.setItem('taskIdCounter', (parseInt(newTask.id) + 1).toString());
  newTask.createdAt = new Date();
  newTask.status = 'scheduled';
  tasks.push(newTask as Task);
  saveTasks(tasks);

  return tasks;
}

export function updateTask(id: string, updatedFields: Partial<Task>): Task[] {
  let tasks: Task[] = fetchTasks();

  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, ...updatedFields };
    }
    return task;
  });
  saveTasks(tasks);

  return tasks;
}

export function deleteTask(id: string): Task[] {
  let tasks: Task[] = fetchTasks();

  tasks = tasks.filter(task => task.id !== id);
  saveTasks(tasks);

  return tasks;
}
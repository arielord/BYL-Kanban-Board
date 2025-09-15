"use client";
import { tasks } from "@/app/lib/data";

export default function seedData() {
  if (typeof window !== 'undefined' && !localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskIdCounter', (tasks.length + 1).toString());
  }
}
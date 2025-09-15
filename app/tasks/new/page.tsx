"use client";
import TaskForm from "@/app/components/task-form";
import { createTask } from "@/app/lib/api";
import { TaskInput } from "@/app/lib/types";
import { useRouter } from "next/navigation";

export default function NewTaskPage() {
  const router = useRouter();
  function handleClick(e: React.FormEvent<HTMLButtonElement>, formData: TaskInput) {
    e.preventDefault();
    const title = formData.title;
    const assignee = formData.assignee;
    const description = formData.description;
    const tags = formData.tags?.split(",").map(tag => tag.trim()) || [];

    const tasks = createTask({ ...formData, title, assignee, description, tags });

    router.push(`/tasks/${tasks[tasks.length - 1].id}`);
  }
  return (
    <TaskForm handleClick={handleClick} />
  );
}

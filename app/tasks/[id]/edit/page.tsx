"use client";

import { use } from "react";
import { updateTask }  from "@/app/lib/api";
import { TaskInput } from "@/app/lib/types";
import { useRouter } from "next/navigation";
import TaskForm from "@/app/components/task-form";

export default function TaskEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  function handleClick(e: React.FormEvent<HTMLButtonElement>, formData: TaskInput) {
    e.preventDefault();
    const title = formData.title;
    const assignee = formData.assignee;
    const description = formData.description;
    const tags = formData.tags?.split(",").map(tag => tag.trim()) || [];

    updateTask(id, { ...formData, title, assignee, description, tags });

    router.push(`/tasks/${id}`);
  }

  return(
    <TaskForm handleClick={handleClick} taskId={id} />
  )
}
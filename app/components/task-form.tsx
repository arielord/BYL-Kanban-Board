"use client";

import { useState } from "react";
import { fetchTask } from "@/app/lib/api";
import { TaskInput } from "@/app/lib/types";
import Input from "@/app/components/input";

type TaskFormProps = {
  handleClick: (e: React.FormEvent<HTMLButtonElement>, formData: TaskInput) => void;
  taskId?: string;
};

export default function TaskForm({ handleClick, taskId }: TaskFormProps) {
  const task = taskId ? fetchTask(taskId) : null;
  const [formData, setFormData] = useState({
      title: task?.title || "",
      assignee: task?.assignee || "",
      description: task?.description || "",
      tags: task?.tags.join(", ") || "",
    });
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    }

  return (
    <div>
      <Input handleChange={handleChange} id="title" placeholder="Title" type="text" defaultValue={task?.title} />
      <Input handleChange={handleChange} id="assignee" placeholder="Assignee" type="text" defaultValue={task?.assignee} />
      <Input handleChange={handleChange} id="description" placeholder="Description" type="textarea" defaultValue={task?.description} />
      <Input handleChange={handleChange} id="tags" placeholder="Enter tags separated by commas e.g. tag1, tag2" type="text" defaultValue={task?.tags.join(", ")} />
      <button onClick={(e) => handleClick(e, formData)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Save</button>
    </div>
  );
}

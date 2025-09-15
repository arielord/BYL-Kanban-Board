"use client";

import EditButton from "@/app/components/edit-button";
import { fetchTask } from "@/app/lib/api";
import { use } from "react";

export default function TaskPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  let task = fetchTask(id);
  return (
    <div>
        {task ? (
          <div>
            <h2 className="text-2xl font-bold text-center">{task.title}</h2>
            <p className="p-2">Description: {task.description}</p>
            <p className="p-2">Status: {task.status}</p>
            <p className="p-2">Assignee: {task.assignee}</p>
            <p className="p-2">Tags: {task.tags.join(", ")}</p>
            <p className="p-2">Created At: {new Date(task.createdAt).toLocaleString()}</p>
            <EditButton id={task.id} />
          </div>
        ) : (
          <p>Task not found.</p>
        )}
    </div>
  );
}
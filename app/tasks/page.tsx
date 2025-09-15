"use client";

import dynamic from "next/dynamic";

export default function Page() {
  const TasksBoard = dynamic(() => import("@/app/components/tasks-board"), { ssr: false });

  return (
    <TasksBoard />
  )
}
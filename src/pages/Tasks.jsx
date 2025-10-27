import React from "react";
import TaskManager from "../components/TaskManager";

export default function Tasks() {
  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <TaskManager />
    </main>
  );
}

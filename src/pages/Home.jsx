import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <Card>
        <h2 className="text-2xl font-bold mb-2">Welcome</h2>
        <p className="text-gray-600 dark:text-gray-300">
          This starter app demonstrates a Task Manager built with React and
          Tailwind CSS.
        </p>
      </Card>
    </main>
  );
}

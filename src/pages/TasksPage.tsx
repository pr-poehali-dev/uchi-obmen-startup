import React from "react";
import Navbar from "@/components/Navbar";
import TaskList from "@/components/TaskList";

const TasksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-8">
        <TaskList />
      </main>
    </div>
  );
};

export default TasksPage;
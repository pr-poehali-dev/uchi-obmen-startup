import React, { useState } from "react";
import TaskCard from "@/components/TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Пример данных задач
const initialTasks = [
  {
    id: "1",
    title: "Подготовить отчёт по проекту",
    description: "Проанализировать данные и сформировать квартальный отчёт для руководства.",
    dueDate: "25 окт. 2023",
    timeEstimate: "3 часа",
    priority: "Высокий" as const,
    completed: false
  },
  {
    id: "2",
    title: "Обновить презентацию",
    description: "Добавить новые слайды с информацией о продуктах и обновить статистику.",
    dueDate: "27 окт. 2023",
    timeEstimate: "1.5 часа",
    priority: "Средний" as const,
    completed: false
  },
  {
    id: "3",
    title: "Провести встречу с командой",
    description: "Обсудить план работы на следующую неделю и статус текущих задач.",
    dueDate: "26 окт. 2023",
    timeEstimate: "1 час",
    priority: "Высокий" as const,
    completed: true
  }
];

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState("active");
  
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  
  const handleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  return (
    <div className="container max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Мои задачи</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Новая задача
        </Button>
      </div>
      
      <Tabs defaultValue="active" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="active">
            Активные ({activeTasks.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Выполненные ({completedTasks.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          {activeTasks.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              Нет активных задач
            </div>
          ) : (
            activeTasks.map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                dueDate={task.dueDate}
                timeEstimate={task.timeEstimate}
                priority={task.priority}
                completed={task.completed}
                onComplete={() => handleComplete(task.id)}
                onEdit={() => console.log("Edit task", task.id)}
              />
            ))
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {completedTasks.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              Нет выполненных задач
            </div>
          ) : (
            completedTasks.map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                dueDate={task.dueDate}
                timeEstimate={task.timeEstimate}
                priority={task.priority}
                completed={task.completed}
                onComplete={() => handleComplete(task.id)}
                onEdit={() => console.log("Edit task", task.id)}
              />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TaskList;
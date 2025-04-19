import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CalendarDays, CheckSquare, MoreHorizontal } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
  dueDate: string;
  timeEstimate: string;
  priority: "Высокий" | "Средний" | "Низкий";
  completed?: boolean;
  onComplete?: () => void;
  onEdit?: () => void;
}

const priorityColors = {
  Высокий: "text-red-500 bg-red-100",
  Средний: "text-amber-500 bg-amber-100",
  Низкий: "text-green-500 bg-green-100"
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  dueDate,
  timeEstimate,
  priority,
  completed = false,
  onComplete,
  onEdit
}) => {
  return (
    <Card className={`w-full ${completed ? "opacity-75 bg-muted/50" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className={`font-semibold text-lg ${completed ? "line-through text-muted-foreground" : ""}`}>
            {title}
          </h3>
          <Badge className={priorityColors[priority]}>
            {priority}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className={`text-sm text-muted-foreground mb-4 ${completed ? "line-through" : ""}`}>
          {description}
        </p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>Срок: {dueDate}</span>
          </div>
          
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span>Оценка: {timeEstimate}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0">
        <Button 
          variant={completed ? "outline" : "default"} 
          size="sm" 
          onClick={onComplete}
          className={completed ? "text-green-500" : ""}
        >
          <CheckSquare className="mr-1 h-4 w-4" />
          {completed ? "Выполнено" : "Выполнить"}
        </Button>
        
        <Button variant="ghost" size="icon" onClick={onEdit}>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
// components/tasks/TaskItem.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Check, Trash2, Undo } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Task } from './types';
import { Card } from '../card';

export function TaskItem({
  task,
  onToggleComplete,
  onDelete,
}: {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      layout
    >
      <Card className={cn(
        "p-4 hover:shadow-md transition-all duration-200 border-l-4",
        task.completed 
          ? "border-green-400 bg-green-50 hover:bg-green-100/50" 
          : "border-blue-400 bg-white hover:bg-gray-50"
      )}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Button
              variant={task.completed ? 'outline' : 'secondary'}
              size="icon"
              className={cn(
                "shrink-0 transition-colors",
                task.completed 
                  ? "bg-green-100 border-green-200 hover:bg-green-200" 
                  : "hover:bg-blue-100"
              )}
              onClick={() => onToggleComplete(task.id)}
            >
              {task.completed ? (
                <Undo className="h-4 w-4 text-green-600" />
              ) : (
                <Check className="h-4 w-4" />
              )}
            </Button>
            <motion.span
              className={cn(
                "flex-1 truncate",
                task.completed 
                  ? "text-gray-500 line-through" 
                  : "text-gray-800 font-medium"
              )}
              initial={{ opacity: 1 }}
              animate={{ 
                opacity: task.completed ? 0.8 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {task.title}
            </motion.span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "text-gray-500 transition-colors",
                task.completed 
                  ? "hover:text-red-400" 
                  : "hover:text-red-500"
              )}
              onClick={() => onDelete(task.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
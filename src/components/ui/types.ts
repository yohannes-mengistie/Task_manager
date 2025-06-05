// components/tasks/types.ts
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type FilterType = 'all' | 'pending' | 'completed';
// components/tasks/TaskFilter.tsx
'use client';

import { Button } from '@/components/ui/button';
import type { FilterType } from './ui/types';

export function TaskFilter({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}) {
  return (
    <div className="flex justify-center gap-2">
      <Button
        variant={filter === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setFilter('all')}
        className={filter === 'all' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
          'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
      >
        All
      </Button>
      <Button
        variant={filter === 'pending' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setFilter('pending')}
        className={filter === 'pending' ? 'bg-amber-500 hover:bg-amber-600 text-white' : 
          'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
      >
        Pending
      </Button>
      <Button
        variant={filter === 'completed' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? 'bg-green-600 hover:bg-green-700 text-white' : 
          'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
      >
        Completed
      </Button>
    </div>
  );
}
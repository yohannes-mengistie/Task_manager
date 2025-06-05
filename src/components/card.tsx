// components/ui/Card.tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('bg-white rounded-lg shadow-sm border', className)}>
      {children}
    </div>
  );
}
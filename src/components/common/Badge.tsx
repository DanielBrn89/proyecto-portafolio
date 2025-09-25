import type { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full
                     bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">
      {children}
    </span>
  );
}

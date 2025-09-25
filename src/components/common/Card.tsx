
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ className?: string }>;
export default function Card({ className, children }: Props) {
  return <div className={`rounded-2xl shadow-md bg-white/90 dark:bg-zinc-900 border border-black/5 p-4 ${className ?? ''}`}>{children}</div>;
}

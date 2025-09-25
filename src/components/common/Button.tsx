import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };
export default function Button({ variant='primary', className, ...p }: Props) {
  const base = 'inline-flex items-center justify-center h-11 px-4 rounded-xl font-medium focus:outline-none focus:ring';
  const styles = variant==='primary'
    ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800'
    : 'bg-transparent text-indigo-700 hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-white/5';
  return <button className={`${base} ${styles} ${className ?? ''}`} {...p} />;
}

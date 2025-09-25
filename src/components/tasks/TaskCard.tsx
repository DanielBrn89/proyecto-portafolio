import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { Task } from '@/types';

export default function TaskCard({ task, onView }: { task: Task; onView?: (t: Task) => void }) {
  const { week, title, date, summary, details, file, status } = task;
  return (
    <Card className="flex flex-col gap-3">
      <header className="flex items-start justify-between">
        <div>
          <div className="text-sm text-indigo-600 dark:text-indigo-300 font-semibold">Semana {week}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <time className="text-xs text-zinc-500" dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      </header>

      <Badge>{status === 'completed' ? 'Completada' : 'Pendiente'}</Badge>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">{summary}</p>

      <section className="bg-zinc-50 dark:bg-white/5 rounded-xl p-3">
        <h4 className="text-sm font-semibold mb-1">Detalles:</h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{details}</p>
      </section>

      <div className="mt-2 flex gap-2">
        {file && <a href={file} download className="inline-flex h-11 px-4 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700">Descargar Tarea</a>}
        <Button variant="ghost" onClick={() => onView?.(task)}>Ver Detalles</Button>
      </div>
    </Card>
  );
}

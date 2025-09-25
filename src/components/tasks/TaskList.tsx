import { useMemo, useState } from 'react';
import TaskCard from './TaskCard';
import { Task } from '@/types';
import { TaskFilters } from './TaskFilters';

type Tab = 'all' | 'completed' | 'pending';

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const [tab, setTab] = useState<Tab>('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tasks.filter(t => {
      const byTab = tab==='all' ? true : tab==='completed' ? t.status==='completed' : t.status==='pending';
      const byQuery = q ? t.title.toLowerCase().includes(q) : true;
      return byTab && byQuery;
    });
  }, [tasks, tab, query]);

  return (
    <section className="space-y-4" id="tareas">
      <TaskFilters tab={tab} setTab={setTab} query={query} setQuery={setQuery} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map(t => <TaskCard key={t.id} task={t} />)}
      </div>
    </section>
  );
}

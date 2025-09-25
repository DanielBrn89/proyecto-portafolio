import Card from '@/components/common/Card';
import TaskList from '@/components/tasks/TaskList';
import { ACADEMIC_INFO } from '@/data/academicInfo';
import { TASKS } from '@/data/tasks';

export default function Home() {
  const a = ACADEMIC_INFO;
  return (
    <main className="mx-auto max-w-6xl px-4 space-y-8">
      <Card className="mt-6 p-6">
        <div className="flex items-center gap-4">
          <img src={a.avatarUrl} alt={a.fullName} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h2 className="text-2xl font-bold">Información Académica</h2>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">UMG</span>
          </div>
        </div>
        <dl className="mt-6 grid gap-4">
          <Item term="Carrera" desc={a.program} />
          <Item term="Universidad" desc={a.university} />
          <Item term="Semestre" desc={a.semester} />
          <Item term="Correo" desc={a.email} />
        </dl>
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <Stat value={a.stats.completed} label="Tareas Completadas" />
          <Stat value={`${a.stats.performance}%`} label="Rendimiento" />
          <Stat value={a.stats.featuredProjects} label="Proyectos Destacados" />
        </div>
      </Card>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Mis Tareas</h2>
        <TaskList tasks={TASKS} />
      </section>
    </main>
  );
}

function Item({ term, desc }: { term: string; desc: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-32 font-semibold">{term}:</dt>
      <dd className="text-zinc-700 dark:text-zinc-300">{desc}</dd>
    </div>
  );
}
function Stat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="rounded-2xl bg-zinc-50 dark:bg-white/5 p-4">
      <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-300">{value}</div>
      <div className="text-xs text-zinc-500">{label}</div>
    </div>
  );
}

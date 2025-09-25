type Tab = 'all' | 'completed' | 'pending';

export function TaskFilters({ tab, setTab, query, setQuery }:{
  tab: Tab; setTab: (t: Tab)=>void; query: string; setQuery: (q: string)=>void;
}) {
  const TabBtn = (t: Tab, label: string) => (
    <button
      onClick={() => setTab(t)}
      className={`px-3 py-1 rounded-full text-sm font-medium
      ${tab===t ? 'bg-indigo-600 text-white' : 'bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300'}`}
      aria-pressed={tab===t}
    >{label}</button>
  );
  return (
    <div className="flex flex-wrap items-center gap-2">
      {TabBtn('all','Todas')}
      {TabBtn('completed','Completadas')}
      {TabBtn('pending','Pendientes')}
      <input
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Buscar por título…"
        className="ml-2 flex-1 min-w-[220px] h-10 px-3 rounded-xl border border-black/10 bg-white dark:bg-zinc-900"
        aria-label="Buscar tareas por título"
      />
    </div>
  );
}

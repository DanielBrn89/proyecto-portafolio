import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-indigo-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div>
          <div className="text-2xl font-extrabold">Portafolio de Tareas</div>
          <div className="text-xs opacity-90">DESARROLLO WEB</div>
        </div>
        <button onClick={toggle} className="rounded-full bg-white/20 px-3 py-2 text-sm">
          {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>
    </header>
  );
}

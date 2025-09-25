export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/10 py-8 text-sm text-zinc-500">
      <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-zinc-900 dark:text-zinc-100 font-semibold mb-1">Portafolio de Tareas</div>
          <p>Sistema de gestión y presentación de trabajos académicos</p>
        </div>
        <div>
          <div className="text-zinc-900 dark:text-zinc-100 font-semibold mb-1">Contacto</div>
          <p>jbranb2@miumg.edu.gt</p>
          <p>Universidad Mariano Gálvez de Guatemala</p>
        </div>
        <div>
          <div className="text-zinc-900 dark:text-zinc-100 font-semibold mb-1">Enlaces Rápidos</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#tareas" className="hover:underline">Tareas</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center">© 2025 Portafolio de Tareas.</div>
    </footer>
  );
}

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import { ThemeProvider } from '@/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-dvh bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

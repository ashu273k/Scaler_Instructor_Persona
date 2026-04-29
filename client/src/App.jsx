import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import ThemeToggle from './components/ThemeToggle';
import PersonaSelection from './features/persona/PersonaSelection';
import ChatShell from './features/chat/ChatShell';
import { personas } from './utils/personas';
import { useChatStore } from './store/useChatStore';
import useThemeMode from './hooks/useThemeMode';

function App() {
  const activePersonaId = useChatStore((state) => state.activePersonaId);
  const setActivePersona = useChatStore((state) => state.setActivePersona);
  const resetToSelection = useChatStore((state) => state.resetToSelection);
  const { isDark, toggleTheme } = useThemeMode();

  const activePersona = personas.find((persona) => persona.id === activePersonaId);

  return (
    <Layout>
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--ink-muted)]">
            Three-Persona AI Chat
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Pick a voice. Build momentum.
          </h1>
        </div>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </header>

      <AnimatePresence mode="wait">
        {!activePersona ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <PersonaSelection onSelect={setActivePersona} />
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <ChatShell persona={activePersona} onBack={resetToSelection} />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;

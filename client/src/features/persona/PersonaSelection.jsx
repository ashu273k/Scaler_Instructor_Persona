import { motion } from 'framer-motion';
import PersonaCard from './PersonaCard';
import { personas } from '../../utils/personas';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function PersonaSelection({ onSelect }) {
  return (
    <motion.section
      className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--ink-muted)]">
          Choose a persona
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
          Three minds. One conversation.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--ink-muted)]">
          Select the personality that matches your mood. Each one brings a unique lens to the
          conversation.
        </p>
      </div>

      <motion.div
        className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {personas.map((persona) => (
          <motion.div key={persona.id} variants={itemVariants}>
            <PersonaCard persona={persona} onSelect={onSelect} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default PersonaSelection;

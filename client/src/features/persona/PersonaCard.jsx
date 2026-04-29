import { motion } from 'framer-motion';

function PersonaCard({ persona, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(persona.id)}
      className="group relative flex w-full flex-col items-center gap-4 rounded-3xl border border-transparent bg-[var(--surface)] px-6 py-8 text-center shadow-lg transition"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100"
        style={{ background: persona.glow }}
      />
      <div
        className="relative grid h-28 w-28 place-items-center overflow-hidden rounded-3xl border border-white/50 shadow-md"
        style={{ background: persona.cardTone }}
      >
        <img src={persona.avatar} alt={persona.name} className="h-full w-full object-cover" />
      </div>
      <div className="relative">
        <h3 className="text-lg font-semibold text-[var(--ink)]">{persona.name}</h3>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">{persona.tagline}</p>
      </div>
      <div
        className="relative mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
        style={{ backgroundColor: persona.accentSoft, color: persona.accent }}
      >
        {persona.role}
      </div>
    </motion.button>
  );
}

export default PersonaCard;

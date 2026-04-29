import { create } from 'zustand';
import { personas } from '../utils/personas';

const initialMessages = personas.reduce((acc, persona) => {
  acc[persona.id] = [
    {
      id: `${persona.id}-welcome`,
      sender: 'assistant',
      text: persona.greeting,
      timestamp: new Date().toISOString(),
    },
  ];
  return acc;
}, {});

const initialTyping = personas.reduce((acc, persona) => {
  acc[persona.id] = false;
  return acc;
}, {});

export const useChatStore = create((set) => ({
  activePersonaId: null,
  messagesByPersona: initialMessages,
  typingByPersona: initialTyping,
  setActivePersona: (id) => set({ activePersonaId: id }),
  resetToSelection: () => set({ activePersonaId: null }),
  addMessage: (personaId, message) =>
    set((state) => ({
      messagesByPersona: {
        ...state.messagesByPersona,
        [personaId]: [...(state.messagesByPersona[personaId] || []), message],
      },
    })),
  setTyping: (personaId, isTyping) =>
    set((state) => ({
      typingByPersona: { ...state.typingByPersona, [personaId]: isTyping },
    })),
}));

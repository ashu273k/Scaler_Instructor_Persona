import { useEffect, useMemo, useRef } from 'react';
import { useChatStore } from '../../store/useChatStore';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import useChatComposer from '../../hooks/useChatComposer';

function ChatShell({ persona, onBack }) {
  const messages = useChatStore((state) => state.messagesByPersona[persona.id] || []);
  const typing = useChatStore((state) => state.typingByPersona[persona.id]);
  const endRef = useRef(null);
  const { value, setValue, sendMessage } = useChatComposer(persona.id);

  const headerTone = useMemo(
    () => ({ backgroundColor: persona.accentSoft, color: persona.accent }),
    [persona.accent, persona.accentSoft]
  );

  useEffect(() => {
    if (!endRef.current) return;
    endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, typing]);

  return (
    <div className="flex min-h-[70vh] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <img
            src={persona.avatar}
            alt={persona.name}
            className="h-12 w-12 rounded-2xl object-cover"
          />
          <div>
            <p className="text-lg font-semibold text-[var(--ink)]">{persona.name}</p>
            <p className="text-sm text-[var(--ink-muted)]">{persona.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={headerTone}>
            {persona.tagline}
          </span>
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--ink-muted)] transition hover:-translate-y-0.5 hover:shadow"
          >
            Switch persona
          </button>
        </div>
      </div>

      <div
        className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-6 sm:px-6"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center text-[var(--ink-muted)]">
            <p className="text-lg font-semibold text-[var(--ink)]">Start the conversation</p>
            <p className="mt-2 max-w-md text-sm">
              Ask {persona.name} for guidance, feedback, or a new perspective.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatBubble key={message.id} message={message} accent={persona.accent} />
          ))
        )}
        {typing ? (
          <div className="rounded-2xl bg-[var(--surface-strong)] px-4 py-3">
            <TypingIndicator accent={persona.accent} />
          </div>
        ) : null}
        <div ref={endRef} />
      </div>

      <ChatInput value={value} onChange={setValue} onSend={sendMessage} accent={persona.accent} />
    </div>
  );
}

export default ChatShell;

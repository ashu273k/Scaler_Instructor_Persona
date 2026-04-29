import { useEffect, useRef } from 'react';

function ChatInput({ value, onChange, onSend, accent }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [value]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-3">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message and press Enter"
          rows={1}
          className="max-h-32 w-full resize-none bg-transparent text-sm text-[var(--ink)] outline-none sm:text-base"
        />
        <div className="flex items-center justify-between text-xs text-[var(--ink-muted)]">
          <span>Shift + Enter for a new line</span>
          <button
            type="button"
            onClick={onSend}
            disabled={!value.trim()}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition enabled:shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
            style={{ backgroundColor: accent }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;

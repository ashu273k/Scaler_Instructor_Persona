function TypingIndicator({ accent }) {
  return (
    <div className="flex items-center gap-3 text-sm text-[var(--ink-muted)]">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
      <span className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-[var(--ink-muted)] animate-typing" />
        <span
          className="h-2 w-2 rounded-full bg-[var(--ink-muted)] animate-typing"
          style={{ animationDelay: '0.15s' }}
        />
        <span
          className="h-2 w-2 rounded-full bg-[var(--ink-muted)] animate-typing"
          style={{ animationDelay: '0.3s' }}
        />
      </span>
      <span>Typing...</span>
    </div>
  );
}

export default TypingIndicator;

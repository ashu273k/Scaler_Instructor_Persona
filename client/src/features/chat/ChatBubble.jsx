function ChatBubble({ message, accent }) {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm sm:text-base ${
          isUser
            ? 'bg-[var(--accent)] text-white rounded-br-md'
            : 'bg-[var(--surface-strong)] text-[var(--ink)] rounded-bl-md'
        }`}
        style={{ '--accent': accent }}
      >
        {message.text}
      </div>
    </div>
  );
}

export default ChatBubble;

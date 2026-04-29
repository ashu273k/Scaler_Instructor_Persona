import { useCallback, useEffect, useState } from 'react';
import { useChatStore } from '../store/useChatStore';

function useChatComposer(personaId) {
  const addMessage = useChatStore((state) => state.addMessage);
  const setTyping = useChatStore((state) => state.setTyping);
  const messagesByPersona = useChatStore((state) => state.messagesByPersona);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
  }, [personaId]);

  const sendMessage = useCallback(async () => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const userMessage = {
      id: `${personaId}-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toISOString(),
    };

    addMessage(personaId, userMessage);

    setValue('');
    setTyping(personaId, true);

    const conversation = [...(messagesByPersona[personaId] || []), userMessage]
      .filter((message) => message.sender === 'user' || message.sender === 'assistant')
      .map((message) => ({
        role: message.sender === 'user' ? 'user' : 'assistant',
        content: message.text,
      }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ persona: personaId, messages: conversation }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Request failed.');
      }

      addMessage(personaId, {
        id: `${personaId}-${Date.now()}-reply`,
        sender: 'assistant',
        text: data.reply,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      addMessage(personaId, {
        id: `${personaId}-${Date.now()}-error`,
        sender: 'assistant',
        text: error?.message || 'Something went wrong. Please try again.',
        timestamp: new Date().toISOString(),
      });
    } finally {
      setTyping(personaId, false);
    }
  }, [value, personaId, addMessage, setTyping, messagesByPersona]);

  return { value, setValue, sendMessage };
}

export default useChatComposer;

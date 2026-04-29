export const getPersonaReply = (personaId, text) => {
  const replies = {
    logical: `Understood. We will break "${text}" into inputs, decisions, and outputs.`,
    creative: `Ooh, "${text}" has potential. Want three bold directions?`,
    mentor: `Acknowledged. "${text}" needs a measurable target. Ready to commit?`,
  };

  return replies[personaId] || `Thanks for sharing: "${text}".`;
};

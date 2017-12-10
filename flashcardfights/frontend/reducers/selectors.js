export const selectChallenge = ({ challenges }, id) => {
  const challenge = challenges[id] || {};
  return challenge;
};

export const selectQuiz = ({ quizzes }, id) => {
  const quiz = quizzes[id] || {};
  return quiz;
};

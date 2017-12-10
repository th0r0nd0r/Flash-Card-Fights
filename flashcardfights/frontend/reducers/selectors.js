export const selectChallenge = ({ challenges }, id) => {
  const challenge = challenges[id] || {};
  return challenge;
};

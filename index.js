const healthTips = require('./tips.json');

function getRandomHealthTip() {
  const index = Math.floor(Math.random() * healthTips.length);
  return healthTips[index];
}

module.exports = { getRandomHealthTip };

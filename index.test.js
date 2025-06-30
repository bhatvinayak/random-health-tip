const { getRandomHealthTip } = require('./index');

describe('getRandomHealthTip', () => {
  it('should return a non-empty string', () => {
    const tip = getRandomHealthTip();
    expect(typeof tip).toBe('string');
    expect(tip.length).toBeGreaterThan(0);
  });

  it('should return a valid tip from the list', () => {
    const tips = require('./tips.json');
    const tip = getRandomHealthTip();
    expect(tips).toContain(tip);
  });
});

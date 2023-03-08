import getHealthHeros from '../getHealthHeros';

test('getHealthHeros test', () => {
  const heros = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const herosResult = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = getHealthHeros(heros);
  expect(result).toEqual(herosResult);
});

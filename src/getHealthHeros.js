export default function getHealthHeros(heros) {
  return heros.sort((a, b) => (a.health < b.health ? 1 : -1));
}

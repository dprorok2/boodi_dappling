const BASE = import.meta.env.PROD
  ? 'https://boodi-be-4611caadff9d.herokuapp.com'
  : 'http://localhost:3000';
const BASE_WSS = import.meta.env.PROD
  ? 'wss://boodi-be-4611caadff9d.herokuapp.com'
  : 'ws://localhost:3000';

export const API_URLS = {
  api: {
    fourNobleTruths: `${BASE_WSS}/four-noble-truths`,
    eightfoldPathFull: `${BASE_WSS}/eightfold-path/full`,
    zeroShotWisdom: `${BASE_WSS}/zero-shot-wisdom`,
  },
};

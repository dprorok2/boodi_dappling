const BASE = import.meta.env.PROD
  ? 'https://boodi-proxy.replit.app'
  : 'http://localhost:1104';
const BASE_WSS = import.meta.env.PROD
  ? 'wss://boodi-proxy.replit.app'
  : 'ws://localhost:1104';

export const API_URLS = {
  proxy: {
    fourNobleTruths: `${BASE_WSS}/four-noble-truths`,
    eightfoldPathFull: `${BASE_WSS}/eightfold-path/full`,
  },
};

//const BASE = 'http://localhost:1104';
const BASE = 'https://boodi-proxy.replit.app';
const BASE_WSS = 'wss://boodi-proxy.replit.app';

export const API_URLS = {
  proxy: {
    fourNobleTruths: `${BASE_WSS}/four-noble-truths`,
    eightfoldPath: `${BASE}/eightfold-path`,
    eightfoldPathFullStreaming: `${BASE}/eightfold-path/full-streaming`,
  },
};

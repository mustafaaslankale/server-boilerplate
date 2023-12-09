import { config } from 'dotenv';
config();

import beeServer from './lib/server';

const app = async () => {
  await beeServer();
};

app()
  .then(async () => console.log('[NETWORK APP]\tSTARTED'))
  .catch((err) => {
    console.log(`[NETWORK APP]\tNOTi STARTED ${err}`);
    process.exit();
  });

import { config } from 'dotenv';
config();

import beeServer from './lib/server';


const app = async () => {
  await beeServer();
};

app()
  .then(async () =>  console.log('[NETWORK APP]\tSTARTED'))
  .catch((err) => {
    console.log(`[NETWORK APP]\tNOT STARTED ${err}`);
    process.exit();
  });

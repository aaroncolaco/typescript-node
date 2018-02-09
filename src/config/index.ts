'use strict';

import Config from './config';

const env = process.env.NODE_ENV || 'development';
const envtConfig = Config[env];

export default {
  getEnv: () => env,
  getStatusMessage: (code: number) => Config.statusMsgs[code],
  getURL: () => envtConfig.url
};

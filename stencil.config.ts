import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  copy: [{ src: '_headers' }],
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: { cacheId: 'v1' },
    },
  ],
};

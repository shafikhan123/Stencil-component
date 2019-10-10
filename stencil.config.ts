import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sidebar-menu',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};

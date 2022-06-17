import { Asset } from './asset.entity';

import { ASSET_REPOSITORY } from '../../core/constants';

export const assetsProviders = [
  {
    provide: ASSET_REPOSITORY,
    useValue: Asset,
  },
];

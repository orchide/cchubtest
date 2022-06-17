import { Score } from 'src/modules/score/score.entity';

import { SCORE_REPOSITORY } from '../../core/constants';

export const scoreProviders = [
  {
    provide: SCORE_REPOSITORY,
    useValue: Score,
  },
];

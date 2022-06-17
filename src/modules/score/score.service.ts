import { Asset } from './../asset/asset.entity';
import { Score } from 'src/modules/score/score.entity';
import { SCORE_REPOSITORY } from './../../core/constants';
import { Inject, Injectable } from '@nestjs/common';
import { ScoreDto } from './dto/score.dto';
import { Sequelize, Model } from 'sequelize-typescript';

@Injectable()
export class ScoreService {
  constructor(
    @Inject(SCORE_REPOSITORY) private scoreRepository: typeof Score,
  ) {}

  async create(id, score) {
    return this.scoreRepository.create<Score>({
      assetId: id,
      ...score,
    });
  }
}

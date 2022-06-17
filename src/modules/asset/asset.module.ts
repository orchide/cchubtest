import { scoreProviders } from './../score/score.providers';
import { ScoreService } from './../score/score.service';
import { Score } from 'src/modules/score/score.entity';
import { AssetController } from './asset.controllers';
import { Module } from '@nestjs/common';
import { assetsProviders } from './asset.providers';
import { AssetService } from './asset.service';

@Module({
  providers: [AssetService, ...assetsProviders],
  exports: [AssetService],
  controllers: [AssetController],
})
export class AssetModule {}

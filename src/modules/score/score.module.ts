import { ScoreController } from './scores.controllers';
import { scoreProviders } from './score.providers';
import { Module, Controller } from '@nestjs/common';
import { ScoreService } from './score.service';

@Module({
  providers: [ScoreService, ...scoreProviders],
  controllers: [ScoreController],
  exports: [ScoreService],
})
export class ScoreModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { AssetModule } from './modules/asset/asset.module';
import { ScoreModule } from './modules/score/score.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AssetModule,
    ScoreModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

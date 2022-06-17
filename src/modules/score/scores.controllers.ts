import { ScoreDto } from './dto/score.dto';
import { ScoreService } from './score.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('assets')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post(':id/score')
  async create(@Body() body: ScoreDto, @Param('id') id: string) {
    return this.scoreService.create(id, body);
  }
}

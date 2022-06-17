import { AssetService } from './asset.service';
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
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('create')
  async create(@Request() req) {
    const { file } = req;

    return this.assetService.create(file);
  }

  @Get(':id')
  async getAssets(@Param('id') id: string | number) {
    return this.assetService.findById(id);
  }

  @Get(':asset/:score/avg')
  async getAverages(
    @Param(':assetType') assetType: string,
    @Param(':scoreType') scoreType: string,
    @Request() req,
  ) {
    console.log(req.params);
    return this.assetService.findAverages(req.params.asset, req.params.score);
  }
}

import { Score } from 'src/modules/score/score.entity';
import { Op, Sequelize } from 'sequelize';
import { AssetDto } from './dto/asset.dto';
import { Asset } from './asset.entity';
import { ASSET_REPOSITORY, SCORE_REPOSITORY } from './../../core/constants';
import { Inject, Injectable } from '@nestjs/common';
import { group } from 'console';

@Injectable()
export class AssetService {
  constructor(
    @Inject(ASSET_REPOSITORY) private readonly assetRepository: typeof Asset,
  ) {}

  async create(file): Promise<Asset> {
    return await this.assetRepository.create<Asset>({
      filename: file.originalname,
      type: file.mimetype.includes('image')
        ? 'Image'
        : file.mimetype.includes('video')
        ? 'Video'
          : file.mimetype.includes('pdf') ? 'PDF' : file.mimetype.includes('docx') ? 'Document' : 'Document',
      extension: file.mimetype,
    });
  }

  async findById(id): Promise<Asset> {
    return await this.assetRepository.findByPk<Asset>(id, {
      include: ['scores'],
    });
  }

  async findAverages(assetType: string, scoreType: string) {
    const assetTypeAvg = await this.assetRepository.findAll<Asset>({
      where: {
        type: assetType,
      },
      attributes: ['type',
            [
              Sequelize.fn('AVG', Sequelize.col('scores.value')),
              'average_score'
            ],
     ],
      include: [
        {
          model: Score,
          as: 'scores',
          attributes: [],
          where: {
            '$scores.type$': {
              [Op.like]: `%${scoreType}%`,
            },
          },
          required: false,
          right: true
        },
      ],
      group: ['Asset.type'],
      raw: true,
    });

    

    return assetTypeAvg;
  }
}

import { Asset } from './../asset/asset.entity';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class Score extends Model<Score> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  })
  value: number;
  @ForeignKey(() => Asset)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  assetId: number;
  @BelongsTo(() => Asset)
  asset: Asset;
}

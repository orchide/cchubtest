import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { Score } from '../score/score.entity';

@Table
export class Asset extends Model<Asset> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  filename: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  extension: string;

  @HasMany(() => Score)
  scores: Score[];
}

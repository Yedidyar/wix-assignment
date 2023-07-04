import { IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreationTimeFilterDto {
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  'creation_time_from'?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  'creation_time_to'?: Date;
}

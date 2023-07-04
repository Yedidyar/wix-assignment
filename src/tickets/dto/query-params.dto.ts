import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryParamsDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  'creation_time_from'?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  'creation_time_to'?: Date;
}

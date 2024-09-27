import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ListPodcastQueryDto {
  @IsString()
  @IsOptional()
  search?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  categoryName?: string;

  @IsNumber()
  @IsOptional()
  page?: number;

  @IsNumber()
  @IsOptional()
  limit?: number;

  @IsNumber()
  @IsOptional()
  p?: number;

  @IsNumber()
  @IsOptional()
  l?: number;
}

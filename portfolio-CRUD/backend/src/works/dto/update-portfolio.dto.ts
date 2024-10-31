import { IsString, IsOptional, IsUrl, IsBoolean } from 'class-validator';

export class UpdatePortfolioDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  siteLink?: string;

  @IsOptional()
  @IsString()
  image_path?: string;

  @IsOptional()
  @IsBoolean()
  hidden?: boolean;
}
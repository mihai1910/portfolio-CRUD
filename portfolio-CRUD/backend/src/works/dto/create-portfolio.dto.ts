import { IsString, IsOptional, IsUrl, IsBoolean } from 'class-validator';

export class CreatePortfolioDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

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
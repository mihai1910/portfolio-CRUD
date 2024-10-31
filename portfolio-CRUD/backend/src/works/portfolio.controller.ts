import { Controller, Get, Post, Put, Delete, Body, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from './entities/portfolio.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('portfolios')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  findAll() {
    return this.portfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.portfolioService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  create(@Body() portfolioData: Partial<Portfolio>, @UploadedFile() file: Express.Multer.File) {
    if (file) portfolioData.image_path = file.path;
    return this.portfolioService.create(portfolioData);
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  update(@Param('id') id: number, @Body() portfolioData: Partial<Portfolio>, @UploadedFile() file: Express.Multer.File) {
    if (file) portfolioData.image_path = file.path;
    return this.portfolioService.update(id, portfolioData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.portfolioService.remove(id);
  }
}

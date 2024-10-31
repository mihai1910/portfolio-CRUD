import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './works.controller';
import { Portfolio } from './entities/portfolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Portfolio])],
  providers: [PortfolioService],
  controllers: [PortfolioController]
})
export class PortfolioModule {}

// src/portfolio/portfolio.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from './entities/portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private portfolioRepository: Repository<Portfolio>,
  ) {}

  async findAll() {
    return this.portfolioRepository.find();
  }

  async findVisible() {
    return this.portfolioRepository.find({ where: { hidden: false } });
  }

  async findOne(id: number) {
    const portfolio = await this.portfolioRepository.findOne({ where: { id } });
    if (!portfolio) throw new NotFoundException(`Portfolio with ID ${id} not found`);
    return portfolio;
  }

  async create(portfolioData: Partial<Portfolio>) {
    const portfolio = this.portfolioRepository.create(portfolioData);
    return this.portfolioRepository.save(portfolio);
  }

  async update(id: number, portfolioData: Partial<Portfolio>) {
    const result = await this.portfolioRepository.update(id, portfolioData);
    if (result.affected === 0) throw new NotFoundException(`Portfolio with ID ${id} not found`);
    return this.portfolioRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const result = await this.portfolioRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Portfolio with ID ${id} not found`);
  }
}

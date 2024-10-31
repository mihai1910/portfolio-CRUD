import { Repository } from 'typeorm';
import { Portfolio } from './entities/portfolio.entity';
export declare class PortfolioService {
    private portfolioRepository;
    constructor(portfolioRepository: Repository<Portfolio>);
    findAll(): Promise<Portfolio[]>;
    findVisible(): Promise<Portfolio[]>;
    findOne(id: number): Promise<Portfolio>;
    create(portfolioData: Partial<Portfolio>): Promise<Portfolio>;
    update(id: number, portfolioData: Partial<Portfolio>): Promise<Portfolio>;
    remove(id: number): Promise<void>;
}

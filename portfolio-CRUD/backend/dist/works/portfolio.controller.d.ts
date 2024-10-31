import { PortfolioService } from './portfolio.service';
import { Portfolio } from './entities/portfolio.entity';
export declare class PortfolioController {
    private readonly portfolioService;
    constructor(portfolioService: PortfolioService);
    findAll(): Promise<Portfolio[]>;
    findOne(id: number): Promise<Portfolio>;
    create(portfolioData: Partial<Portfolio>, file: Express.Multer.File): Promise<Portfolio>;
    update(id: number, portfolioData: Partial<Portfolio>, file: Express.Multer.File): Promise<Portfolio>;
    remove(id: number): Promise<void>;
}

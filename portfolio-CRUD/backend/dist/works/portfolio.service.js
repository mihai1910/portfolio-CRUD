"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const portfolio_entity_1 = require("./entities/portfolio.entity");
let PortfolioService = class PortfolioService {
    constructor(portfolioRepository) {
        this.portfolioRepository = portfolioRepository;
    }
    async findAll() {
        return this.portfolioRepository.find();
    }
    async findVisible() {
        return this.portfolioRepository.find({ where: { hidden: false } });
    }
    async findOne(id) {
        const portfolio = await this.portfolioRepository.findOne({ where: { id } });
        if (!portfolio)
            throw new common_1.NotFoundException(`Portfolio with ID ${id} not found`);
        return portfolio;
    }
    async create(portfolioData) {
        const portfolio = this.portfolioRepository.create(portfolioData);
        return this.portfolioRepository.save(portfolio);
    }
    async update(id, portfolioData) {
        const result = await this.portfolioRepository.update(id, portfolioData);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Portfolio with ID ${id} not found`);
        return this.portfolioRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const result = await this.portfolioRepository.delete(id);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Portfolio with ID ${id} not found`);
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(portfolio_entity_1.Portfolio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map
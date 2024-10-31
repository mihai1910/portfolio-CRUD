// src/portfolio/portfolio.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  siteLink: string;

  @Column()
  image_path: string;

  @Column({ default: false })
  hidden: boolean;
}

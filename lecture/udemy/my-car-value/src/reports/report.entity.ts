import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Report  Entity
@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;
}

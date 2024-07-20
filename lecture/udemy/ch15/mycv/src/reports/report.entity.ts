import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  // 자동차 제조사 추가
  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  // 위도 경도
  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;
}

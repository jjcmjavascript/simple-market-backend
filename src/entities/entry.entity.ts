import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';

import { Product } from './product.entity';

@Entity('entries')
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({ type: 'varchar', length: 250 })
  type: string;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @Column({
    type: 'numeric',
    precision: 22,
    scale: 10,
  })
  quantity: number;

  @Column({
    type: 'numeric',
    precision: 22,
    scale: 10,
  })
  price: number;

  @Column({ nullable: true })
  documentId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isActive: boolean;

  @Column()
  order: number; // order in list

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
  updateTime: Date;
}

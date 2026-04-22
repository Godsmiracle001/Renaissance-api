import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('user_spin_stats')
export class UserSpinStats {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ default: 0 })
  totalSpins: number;

  @Column({ type: 'decimal', precision: 18, scale: 8, default: 0 })
  totalWinnings: number;

  @Column({ default: 0 })
  currentStreak: number;

  @Column({ default: 0 })
  bestStreak: number;
}
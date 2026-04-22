import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum TransactionStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export enum TransactionKind {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  BET = 'bet',
  WIN = 'win',
}

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
  WALLET_DEPOSIT = 'wallet_deposit',
  WALLET_WITHDRAWAL = 'wallet_withdrawal',
  BET_PLACEMENT = 'bet_placement',
  BET_WINNING = 'bet_winning',
  BET_CANCELLATION = 'bet_cancellation',
  STAKING_REWARD = 'staking_reward',
  STAKING_PENALTY = 'staking_penalty',
}

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'decimal', precision: 18, scale: 8 })
  amount: number;

  @Column({ type: 'enum', enum: TransactionKind })
  kind: TransactionKind;

  @Column({ type: 'enum', enum: TransactionType, nullable: true })
  type: TransactionType;

  @Column({ type: 'enum', enum: TransactionStatus, default: TransactionStatus.PENDING })
  status: TransactionStatus;

  @Column({ nullable: true })
  txHash: string;

  @Column({ nullable: true })
  reference: string;

  @Column({ nullable: true })
  referenceId: string;

  @Column({ nullable: true })
  relatedEntityId: string;

  @Column({ type: 'json', nullable: true })
  metadata: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;
}
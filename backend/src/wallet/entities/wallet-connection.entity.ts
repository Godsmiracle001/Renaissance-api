import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum WalletType {
  FREIGHTER = 'freighter',
}

export enum WalletStatus {
  ACTIVE = 'active',
}

@Entity('wallet_connections')
export class WalletConnection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column({ unique: true })
  publicKey: string;

  @Column({ type: 'enum', enum: WalletType, default: WalletType.FREIGHTER })
  walletType: WalletType;

  @Column({ type: 'enum', enum: WalletStatus, default: WalletStatus.ACTIVE })
  status: WalletStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
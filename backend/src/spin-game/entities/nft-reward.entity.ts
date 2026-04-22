import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum NFTRewardTier {
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum',
}

export enum NFTTier {
  COMMON = 'common',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary',
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum',
}

@Entity('nft_rewards')
export class NFTReward {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  nftContractAddress: string;

  @Column()
  nftId: string;

  @Column({ type: 'enum', enum: NFTRewardTier })
  tier: NFTRewardTier;

  @Column({ default: false })
  isMinted: boolean;

  @Column({ nullable: true })
  mintTransactionHash: string;

  @Column({ nullable: true })
  claimedAt: Date;

  @Column({ nullable: true })
  metadataUri: string;

  @Column({ nullable: true })
  spinGameId: string;

  @CreateDateColumn()
  createdAt: Date;
}
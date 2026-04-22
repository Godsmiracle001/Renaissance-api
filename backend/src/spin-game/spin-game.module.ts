import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NFTReward } from './entities/nft-reward.entity';
import { UserSpinStats } from './entities/user-spin-stats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NFTReward, UserSpinStats])],
  exports: [NFTReward, UserSpinStats],
})
export class SpinGameModule {}
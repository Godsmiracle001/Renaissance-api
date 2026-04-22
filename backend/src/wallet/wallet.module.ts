import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletConnection } from './entities/wallet-connection.entity';
import { BalanceTransaction } from './entities/balance-transaction.entity';
import { WalletService } from './services/wallet.service';

@Module({
  imports: [TypeOrmModule.forFeature([WalletConnection, BalanceTransaction])],
  providers: [WalletService],
  exports: [WalletService],
})
export class WalletModule {}
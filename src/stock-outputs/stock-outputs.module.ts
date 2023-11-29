import { Module } from '@nestjs/common';
import { StockOutputsService } from './stock-outputs.service';
import { StockOutputsController } from './stock-outputs.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StockOutputsController],
  providers: [StockOutputsService],
})
export class StockOutputsModule {}

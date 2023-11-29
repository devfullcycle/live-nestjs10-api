import { Module } from '@nestjs/common';
import { StockInputsService } from './stock-inputs.service';
import { StockInputsController } from './stock-inputs.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StockInputsController],
  providers: [StockInputsService],
})
export class StockInputsModule {}

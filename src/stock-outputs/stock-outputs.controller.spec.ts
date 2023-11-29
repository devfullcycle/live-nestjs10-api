import { Test, TestingModule } from '@nestjs/testing';
import { StockOutputsController } from './stock-outputs.controller';
import { StockOutputsService } from './stock-outputs.service';

describe('StockOutputsController', () => {
  let controller: StockOutputsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockOutputsController],
      providers: [StockOutputsService],
    }).compile();

    controller = module.get<StockOutputsController>(StockOutputsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

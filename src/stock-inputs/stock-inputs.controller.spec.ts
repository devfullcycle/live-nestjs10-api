import { Test, TestingModule } from '@nestjs/testing';
import { StockInputsController } from './stock-inputs.controller';
import { StockInputsService } from './stock-inputs.service';

describe('StockInputsController', () => {
  let controller: StockInputsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockInputsController],
      providers: [StockInputsService],
    }).compile();

    controller = module.get<StockInputsController>(StockInputsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { StockInputsService } from './stock-inputs.service';

describe('StockInputsService', () => {
  let service: StockInputsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockInputsService],
    }).compile();

    service = module.get<StockInputsService>(StockInputsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

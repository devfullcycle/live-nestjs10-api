import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StockInputsService } from './stock-inputs.service';
import { CreateStockInputDto } from './dto/create-stock-input.dto';

@Controller('stock-inputs')
export class StockInputsController {
  constructor(private readonly stockInputsService: StockInputsService) {}

  @Post()
  create(@Body() createStockInputDto: CreateStockInputDto) {
    return this.stockInputsService.create(createStockInputDto);
  }

  @Get()
  findAll() {
    return this.stockInputsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockInputsService.findOne(+id);
  }
}

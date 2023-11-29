import { Injectable } from '@nestjs/common';
import { CreateStockInputDto } from './dto/create-stock-input.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundError } from '../errors';

@Injectable()
export class StockInputsService {
  constructor(private prismaService: PrismaService) {}

  async create(createStockInputDto: CreateStockInputDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id: createStockInputDto.product_id },
    });

    if (!product) {
      throw new NotFoundError('Product not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.stockInput.create({
        data: {
          productId: createStockInputDto.product_id,
          quantity: createStockInputDto.quantity,
          date: createStockInputDto.date,
        },
      }),
      this.prismaService.product.update({
        where: { id: createStockInputDto.product_id },
        data: {
          quantity: {
            increment: createStockInputDto.quantity,
          },
        },
      }),
    ]);

    return result[0];
  }

  findAll() {
    return this.prismaService.stockInput.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.stockInput.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Stock Input with ID ${id} not found`);
      }
      throw error;
    }
  }
}

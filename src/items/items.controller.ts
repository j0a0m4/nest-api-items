import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';
import { ItemDTO } from './item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() ItemDTO: ItemDTO): Promise<Item> {
    return this.itemsService.create(ItemDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() ItemDTO: ItemDTO): Promise<Item> {
    return this.itemsService.update(id, ItemDTO);
  }
}

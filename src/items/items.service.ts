import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(_id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(_id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(_id);
  }

  async update(_id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(_id, item, { new: true });
  }
}

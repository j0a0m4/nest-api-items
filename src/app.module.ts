import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}

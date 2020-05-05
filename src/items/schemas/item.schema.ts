import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
  name: String,
  qty: Number,
  description: String,
});

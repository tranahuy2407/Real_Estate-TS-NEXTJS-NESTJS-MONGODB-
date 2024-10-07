import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Article {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop({ type: [String] })
  images: string[];

  @Prop()
  status: number;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

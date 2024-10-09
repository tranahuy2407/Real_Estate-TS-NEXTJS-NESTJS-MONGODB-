import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document } from "mongoose"
import { User } from "src/auth/schemas/user.schema";
import { Home } from "src/home/schemas/home.schema";

@Schema({
   timestamps: true 
})
export class Wishlist extends Document{

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    user: User;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Home' })
    home: Home[];

}
export const WishlistSchema = SchemaFactory.createForClass(Wishlist)
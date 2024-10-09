
import { Category } from './../../category/shemas/category.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document } from "mongoose"

@Schema({
   timestamps: true 
})
export class Home extends Document{

    @Prop() 
    title:string

    @Prop() 
    slug:string

    @Prop() 
    address:string

    @Prop() 
    description:string

    @Prop() 
    acreage: number

    @Prop() 
    wc: number

    @Prop() 
    bedroom: number

    @Prop() 
    house_direction: string;

    @Prop()
    bancol_direction: string;

    @Prop() 
    price: number

    @Prop() 
    priceunit: string;

    @Prop() 
    numberfloors: number

    @Prop() 
    interior: string;

    @Prop() 
    legal_document: string;

    @Prop() 
    images: string[];

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    category: Category;

}
export const HomeSchema = SchemaFactory.createForClass(Home)
import { IsArray, IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
import { Category } from "src/category/shemas/category.schema";

export class CreateHomeDto{

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly slug: string

    @IsNotEmpty()
    @IsString()
    readonly address: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    readonly  acreage: number;

    @IsNotEmpty()
    @IsNumber()
    readonly  wc: number;

    @IsNotEmpty()
    @IsNumber()
    readonly  bedroom: number;

    @IsNotEmpty()
    @IsNumber()
    readonly  price: number;

    @IsNotEmpty()
    @IsArray()  
    readonly images: string[];
    
    @IsNotEmpty()
    @IsString()
    readonly type: string;

    @IsNotEmpty()
    @IsString()
    readonly house_direction: string;

    @IsNotEmpty()
    @IsString()
    readonly bancol_direction: string;

    @IsNotEmpty()
    @IsNumber()
    readonly status: number;

    @IsEmpty({message: "Bạn chưa có danh mục của nhà!"})
    readonly category: Category;
}   
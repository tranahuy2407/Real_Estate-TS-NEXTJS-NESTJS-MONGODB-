import { IsArray, IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";

export class CreateArticleDto{

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    
    @IsNotEmpty()
    @IsString()
    readonly description: string;


    @IsNotEmpty()
    @IsString()
    readonly author: string;

    
    @IsNotEmpty()
    @IsArray()  
    readonly images: string[];

    
    @IsNotEmpty()
    @IsNumber()
    readonly status: number;


    @IsEmpty({message: "Bạn chưa có id người dùng!"})
    readonly user: User;
}   
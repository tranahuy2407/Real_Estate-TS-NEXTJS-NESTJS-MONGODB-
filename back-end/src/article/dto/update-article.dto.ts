import { IsOptional, IsString, IsNumber, IsEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";


export class UpdateArticleDto{

    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly description: string;

    
    @IsOptional()
    @IsString()
    readonly author: string;
    
    @IsOptional()
    @IsString()
    readonly images: string[];

    
    @IsOptional()
    @IsNumber()
    readonly status: number;


    
    @IsEmpty({message: "Bạn chưa có id người dùng!"})
    readonly user: User;
}   
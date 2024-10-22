import { IsNotEmpty, IsEmail, IsString, MinLength, IsOptional, IsArray } from "class-validator";


export class SignUpDto{

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    
    @IsNotEmpty()
    @IsEmail({}, { message: 'Không tìm thấy email của bạn!'})
    readonly email: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;

    @IsString({ each: true })
    @IsArray() 
    readonly phone: string[];


    @IsOptional()
    readonly role: string[];

    @IsOptional()
    @IsString()
    readonly avatar?: string;
}   
import { IsNotEmpty, IsEmail, IsString, MinLength } from "class-validator";


export class LoginDto{    
    @IsNotEmpty()
    @IsEmail({}, { message: 'Không tìm thấy email của bạn!'})
    readonly email: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;

    
}   
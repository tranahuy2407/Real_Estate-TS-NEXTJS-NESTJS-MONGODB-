import { IsString, IsEmail } from 'class-validator';

export class ProfileDto {
    @IsString()
    readonly name: string;

    @IsEmail({}, { message: 'Email không hợp lệ' })
    readonly email: string; 

    @IsString()
    readonly avatar: string;

    @IsString({ each: true })
    readonly role: string[]; 
}

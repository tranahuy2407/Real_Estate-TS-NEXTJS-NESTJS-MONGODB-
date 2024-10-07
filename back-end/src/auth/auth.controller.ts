import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/singup.dto';
import { Body, Controller, Get, Post, UseGuards,Request, Res} from '@nestjs/common';
import { ProfileDto } from './dto/profile.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './decorators/roles.decorator';
import { Role } from './enums/role.enum';
import { RolesGuard } from './guards/roles.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(
     private authService: AuthService){}

    @Post('/signup')
    signUp(@Body() signUpDto:SignUpDto): Promise<{token:string}> {
        return this.authService.singUp(signUpDto)
    }

    
    @Post('login')
    async login(
    @Body() loginDto: LoginDto,
    @Res() res: Response
  ): Promise<void> {
    return this.authService.login(loginDto, res);
  }
    
    @Get('/profile')
    @Roles(Role.User)
    @UseGuards(AuthGuard(), RolesGuard)
    async getProfile(@Request() req: any): Promise<ProfileDto> {
        return this.authService.profile(req.user._id); 
    }
}
 
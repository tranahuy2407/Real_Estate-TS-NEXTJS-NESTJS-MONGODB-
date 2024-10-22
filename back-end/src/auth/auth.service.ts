import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/singup.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User } from './schemas/user.schema';
import { Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
    ){}

    async singUp(singUpDto: SignUpDto): Promise<{token: string}>{
        const {name, email, password, role, avatar, phone} = singUpDto;

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
           name,
           email,
           password: hashPassword,
           role,
           avatar,
           phone
        });

        const token = this.jwtService.sign({id: user._id });
        return { token };
    }

    async login(loginDto: LoginDto, res: Response): Promise<void> {
        const { email, password } = loginDto;
        
        const user = await this.userModel.findOne({ email });
        if (!user) {
          throw new UnauthorizedException("Email không tồn tại trong hệ thống!");
        }
    
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          throw new UnauthorizedException("Mật khẩu không đúng! Hãy nhập lại mật khẩu");
        }
    
        const token = this.jwtService.sign({ id: user._id });
        
        res.cookie('token', token, {
          httpOnly: true,  
          secure: false,
          sameSite: 'strict', 
          maxAge: 7 * 24 * 60 * 60 * 1000 
        });
    
        res.send({ message: "Đăng nhập thành công" });
      }

      async profile(userId: string): Promise<User> {
        const user = await this.userModel.findById(userId).select('-password');
        if (!user) {
            throw new UnauthorizedException("Người dùng không tồn tại!");
        }
        return user;
    }
  
}

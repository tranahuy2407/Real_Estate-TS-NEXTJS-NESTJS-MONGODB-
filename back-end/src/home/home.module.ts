import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeSchema } from './schemas/home.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Home', schema: HomeSchema }]),
  ],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}

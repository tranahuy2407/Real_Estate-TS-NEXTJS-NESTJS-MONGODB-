import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WishlistSchema } from './schemas/wishlist.schema';

@Module({
  imports:[
    AuthModule,
    MongooseModule.forFeature([{ name: 'Wishlist', schema: WishlistSchema }]),
  ],
  controllers: [WishlistController],
  providers: [WishlistService]
})
export class WishlistModule {}

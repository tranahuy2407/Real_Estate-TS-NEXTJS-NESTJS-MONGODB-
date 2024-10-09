import { AddWishlistDto } from './dto/add-wishlist.dto';
import { Wishlist } from './schemas/wishlist.schema';
import { WishlistService } from './wishlist.service';
import { Body, Controller, Post, Req } from '@nestjs/common';

@Controller('wishlist')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

//   @Post('/add-wishlist')
//   async addWishlist(@Body()
//    wishlist: AddWishlistDto,  @Req() req 
//     ): Promise<Wishlist> {
//              return this.wishlistService.addwishlist(wishlist, req.user);
//     }


}

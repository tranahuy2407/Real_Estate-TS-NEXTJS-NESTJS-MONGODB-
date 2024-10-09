import { Injectable } from '@nestjs/common';
import { Wishlist } from './schemas/wishlist.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';
import { Home } from 'src/home/schemas/home.schema';
@Injectable()
export class WishlistService {
    constructor(
        @InjectModel(Wishlist.name)
        private wishlistModel: mongoose.Model<Wishlist>,
      ) {}
    
        // async addwishlist(user: User, homes: Home[]): Promise<Home> {
        //     // const data = Object.assign(homes, { user: user._id });
        //     // const res = await this.wishlistModel.create(homes);
        //     // return res;
        // }
}

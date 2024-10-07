import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Home } from './schemas/home.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class HomeService {
    constructor(
        @InjectModel(Home.name)
        private homeModel: mongoose.Model<Home>,
      ) {}

      async findAll(query: Query): Promise<Home[]> {
        const resPerPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resPerPage * (currentPage - 1);
        const keyword = query.keyword
          ? {
              title: {
                $regex: query.keyword,
                $options: 'i',
              },
            }
          : {};
        const homes = await this.homeModel
          .find({ ...keyword })
          .limit(resPerPage)
          .skip(skip);
        return homes;
      }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Article } from './schemas/article.schema';
import { Query } from 'express-serve-static-core';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: mongoose.Model<Article>,
  ) {}

  async findAll(query: Query): Promise<Article[]> {
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
    const articles = await this.articleModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return articles;
  }

  async create(article: Article, user: User): Promise<Article> {
    const data = Object.assign(article, { user: user._id });
    const res = await this.articleModel.create(article);
    return res;
  }

  async findById(id: string): Promise<Article> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Không tìm thấy id của bài viết!');
    }

    const article = await this.articleModel.findById(id);

    if (!article) {
      throw new NotFoundException('Không tìm thấy bài viết!');
    }
    return article;
  }

  async updateById(id: string, article: Article): Promise<Article> {
    return await this.articleModel.findByIdAndUpdate(id, article, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Article> {
    return await this.articleModel.findByIdAndDelete(id);
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

import {Query as ExpressQuery} from 'express-serve-static-core'
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';

@Controller('articles')     
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async getAllArticles(@Query() query: ExpressQuery): Promise<Article[]> {
    return this.articleService.findAll(query);
  }

  @Post()
  @Roles(Role.Admin, Role.Censor, Role.User)
  @UseGuards(AuthGuard())
  async createArticle(
    @Body()
    article: CreateArticleDto,
    @Req() req 
  ): Promise<Article> {
    return this.articleService.create(article, req.user);
  }

  @Get(':id')
  async getArticle(
    @Param('id')
    id: string,
  ): Promise<Article> {
    return this.articleService.findById(id);
  }

  @Put(':id')
  async updateArticle(
    @Param('id')
    id: string,
    @Body()
    article: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.updateById(id, article);
  }


  @Delete(':id')
  async deleteArticle(
    @Param('id')
    id: string,
    @Body()
    article: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.deleteById(id);
  }
}

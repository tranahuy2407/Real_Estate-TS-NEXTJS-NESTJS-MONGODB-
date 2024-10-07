import { Controller, Get, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import {Query as ExpressQuery} from 'express-serve-static-core'
import { Home } from './schemas/home.schema';


@Controller('homes')
export class HomeController {
    constructor(private homeService: HomeService) {}

    @Get()
    async getAllArticles(@Query() query: ExpressQuery): Promise<Home[]> {
      return this.homeService.findAll(query);
    }
}

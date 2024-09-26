import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}
  @Get()
  async getPodcasts(
    @Query('search') search?: string,
    @Query('title') title?: string,
    @Query('categoryName') categoryName?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('p') p?: number,
    @Query('l') l?: number,
  ) {
    // Use 'p' and 'l' as fallbacks for 'page' and 'limit'
    const actualPage = page || p || 1;
    const actualLimit = limit || l || 10;

    return this.podcastsService.getPodcasts({
      search,
      title,
      categoryName,
      page: actualPage,
      limit: actualLimit,
    });
  }

}

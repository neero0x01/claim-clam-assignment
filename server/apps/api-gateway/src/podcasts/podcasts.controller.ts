import { Controller, Get, Query } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { ListPodcastQueryDto } from './dto/list-podcast.dto';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get()
  async getPodcasts(@Query() query: ListPodcastQueryDto) {
    const { page, p, limit, l } = query;
    // Use 'p' and 'l' as fallbacks for 'page' and 'limit'
    const actualPage = page || p || 1;
    const actualLimit = limit || l || 10;

    return this.podcastsService.getPodcasts({
      search: query.search,
      title: query.title,
      categoryName: query.categoryName,
      page: actualPage,
      limit: actualLimit,
    });
  }
}

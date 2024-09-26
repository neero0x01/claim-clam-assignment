import { Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { PodcastsController } from './podcasts.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PodcastsController],
  providers: [PodcastsService],
})
export class PodcastsModule {}

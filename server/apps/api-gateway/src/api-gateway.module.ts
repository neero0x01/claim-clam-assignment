import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { PodcastsModule } from './podcasts/podcasts.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    PodcastsModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute (60000 milliseconds)
        limit: 20, // Allow 20 requests in 1 minute
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}

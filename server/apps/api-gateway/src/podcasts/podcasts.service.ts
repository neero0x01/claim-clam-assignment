import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosError } from 'axios';

interface PodcastQueryParams {
  search?: string;
  title?: string;
  categoryName?: string;
  page: number;
  limit: number;
}

@Injectable()
export class PodcastsService {
  private readonly baseUrl = 'https://601f1754b5a0e9001706a292.mockapi.io';

  constructor(private httpService: HttpService) {}

  async getPodcasts(params: PodcastQueryParams) {
    const url = `${this.baseUrl}/podcasts`;
    const queryParams: any = {
      page: params.page,
      limit: params.limit,
    };

    if (params.search) {
      queryParams.search = params.search;
    }

    if (params.title) {
      queryParams.title = params.title;
    }

    if (params.categoryName) {
      queryParams.categoryName = params.categoryName;
    }

    return firstValueFrom(
      this.httpService.get(url, { params: queryParams }).pipe(map((response) => response.data),
        catchError((error: AxiosError) => {
          throw new HttpException(
            'Failed to fetch podcasts',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }),
      ),
    );
  }
}
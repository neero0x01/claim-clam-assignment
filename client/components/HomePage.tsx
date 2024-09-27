'use client';

import Input from '@/components/Input';
import Container from '@/components/Container';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PodcastInfoCard from '@/components/PodcastInfoCard';
import { IHomePageQueryParams, IPodcast } from '@/utils/interfaces';

const HomePage = () => {
  const [queryParams, setQueryParams] = useState<IHomePageQueryParams>({
    search: '',
    title: '',
    categoryName: '',
    page: 1,
    limit: 100,
  });

  const [debouncedParams, setDebouncedParams] = useState(queryParams);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedParams(queryParams), 500);
    return () => clearTimeout(timer);
  }, [queryParams]);

  const constructUrl = useCallback((params: IHomePageQueryParams) => {
    const url = new URL('http://localhost:3001/podcasts');
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        if (key === 'page') url.searchParams.append('p', value.toString());
        else if (key === 'limit') url.searchParams.append('l', value.toString());
        else url.searchParams.append(key, value.toString());
      }
    });
    return url.toString();
  }, []);


  const fetchPodcasts = useCallback(async (params: IHomePageQueryParams) => {
    const url = constructUrl(params);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }, [constructUrl]);

  const { isPending, error, data, isFetching } = useQuery<IPodcast[]>({
    queryKey: ['podcastsData', debouncedParams], // Correct queryKey format
    queryFn: () => fetchPodcasts(debouncedParams), // Pass the second element, which is the debouncedParams object
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQueryParams(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Container>
        <h1 className="text-center text-2xl font-bold mb-4">Search Podcasts</h1>
        <div className="flex flex-col space-y-2 w-full max-w-2xl mx-auto">
          <Input
            name="search"
            value={queryParams.search}
            onChange={handleInputChange}
            placeholder="Search podcasts..."
            className="w-full"
          />
        </div>

        <div className="mt-8">
          {isPending || isFetching ? (
            <p className="text-center">Loading podcasts...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error.message}</p>
          ) : data && data.length > 0 ? (
            <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

              {data.map((podcast) => (
                <li key={podcast.id} className="bg-gray-100 p-3 rounded">
                  <PodcastInfoCard title={podcast.title} description={podcast.description}
                                   category={podcast.categoryName} imageUrl={podcast.images.featured}
                                   publisherName={podcast.publisherName} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">No podcasts found. Try different search parameters.</p>
          )}
        </div>

        {/*  Pagination goes here */}

      </Container>
    </div>
  );
};

export default HomePage;
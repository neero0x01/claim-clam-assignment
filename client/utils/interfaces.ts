// Type for Image URLs

interface ImageUrls {
  default: string;
  featured: string;
  thumbnail: string;
  wide: string;
}

// Podcast Interface
export interface IPodcast {
  id: string;
  title: string;
  images: ImageUrls;
  isExclusive: boolean;
  publisherName: string;
  publisherId: string;
  mediaType: string; // e.g., 'podcast'
  description: string;
  categoryId: string;
  categoryName: string; // e.g., 'Religion & Spirituality'
  hasFreeEpisodes: boolean;
  playSequence: 'episodic' | 'sequential'; // Add 'sequential' in case other options exist
}

export interface IGeneralWrapper {
  className: string;
  children: React.ReactNode;
}

export interface IPodcastInfoCard {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  publisherName: string;
}

export interface IHomePageQueryParams {
  search: string,
  title: string,
  categoryName: string,
  page: number,
  limit: number,
}

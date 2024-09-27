import React from 'react';
import { Headphones } from 'lucide-react';
import { IGeneralWrapper, IPodcastInfoCard } from '@/utils/interfaces';

// Card component
const Card = ({ className, children }: IGeneralWrapper) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

// CardHeader component
const CardHeader = ({ className, children }: IGeneralWrapper) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

// CardTitle component
const CardTitle = ({ className, children }: IGeneralWrapper) => (
  <h2 className={`font-bold ${className}`}>
    {children}
  </h2>
);

// CardContent component
const CardContent = ({ className, children }: IGeneralWrapper) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);


const PodcastInfoCard = ({ imageUrl, title, description, category, publisherName }: IPodcastInfoCard) => {
  return (
    <Card className="w-full h-[420px] flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl || '/api/placeholder/400/200'}
        alt={title}
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg flex-1 mr-2">{title}</CardTitle>
          <span className="text-xs text-gray-500 whitespace-nowrap">{category}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-gray-700 text-sm mb-4 line-clamp-4 flex-grow overflow-hidden">
          {description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-600 mt-2">
          <span className="truncate mr-2 flex-1">{publisherName}</span>
          <div className="flex items-center whitespace-nowrap">
            <Headphones className="w-3 h-3 mr-1" />
            <span>Listen</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PodcastInfoCard;
import React from 'react';

const imagesData = [
  {
    id: 1,
    name: 'Sunset Vista',
    description: 'A beautiful view of the sunset over the mountains.',
    imageUrl: 'https://source.unsplash.com/200x150/?sunset,mountains',
  },
  {
    id: 2,
    name: 'City Lights',
    description: 'Nighttime city skyline sparkling with lights.',
    imageUrl: 'https://source.unsplash.com/200x150/?city,night',
  },
  {
    id: 3,
    name: 'Forest Path',
    description: 'A serene path through a lush green forest.',
    imageUrl: 'https://source.unsplash.com/200x150/?forest,path',
  },
  {
    id: 4,
    name: 'Ocean Breeze',
    description: 'Calm waves rolling on a sunny beach.',
    imageUrl: 'https://source.unsplash.com/200x150/?ocean,beach',
  },
  {
    id: 5,
    name: 'Desert Dunes',
    description: 'Golden dunes stretching far into the horizon.',
    imageUrl: 'https://source.unsplash.com/200x150/?desert,dunes',
  },
  {
    id: 6,
    name: 'Snowy Peaks',
    description: 'Majestic snow-covered mountains under a blue sky.',
    imageUrl: 'https://source.unsplash.com/200x150/?snow,mountains',
  },
  {
    id: 7,
    name: 'Blooming Flowers',
    description: 'Bright colorful flowers in full bloom.',
    imageUrl: 'https://source.unsplash.com/200x150/?flowers,bloom',
  },
  {
    id: 8,
    name: 'Starry Night',
    description: 'Clear night sky filled with stars.',
    imageUrl: 'https://source.unsplash.com/200x150/?stars,night',
  },
  {
    id: 9,
    name: 'River Flow',
    description: 'Peaceful river flowing through the valley.',
    imageUrl: 'https://source.unsplash.com/200x150/?river,valley',
  },
  {
    id: 10,
    name: 'Autumn Leaves',
    description: 'Colorful fall leaves carpeting the ground.',
    imageUrl: 'https://source.unsplash.com/200x150/?autumn,leaves',
  },
];

const quotes = [
  "“The best way to predict the future is to create it.” – Peter Drucker",
  "“Life is either a daring adventure or nothing at all.” – Helen Keller",
  "“Do not watch the clock. Do what it does. Keep going.” – Sam Levenson",
];

const BodyHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Images grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
        {imagesData.map(({ id, name, description, imageUrl }) => (
          <div key={id} className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <img src={imageUrl} alt={name} className="w-full h-32 object-cover" />
            <div className="p-2">
              <h3 className="text-sm font-semibold">{name}</h3>
              <p className="text-xs text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quotes section */}
      <div className="bg-blue-600 text-white rounded p-6 space-y-4 text-center">
        {quotes.map((quote, idx) => (
          <blockquote key={idx} className="italic text-lg font-semibold">
            {quote}
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default BodyHome;

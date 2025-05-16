import React from 'react';

const imagesData = [
  {
    id: 1,
    name: 'image_1',
    description: 'A beautiful view of the sunset over the mountains.',
    imageUrl: 'images/image_1.jpg',
  },
  {
    id: 2,
    name: 'image_2',
    description: 'Nighttime city skyline sparkling with lights.',
    imageUrl: 'images/image_2.jpg',
  },
  {
    id: 3,
    name: 'image_3',
    description: 'A serene path through a lush green forest.',
    imageUrl: 'images/image_3.jpg',
  },
  {
    id: 4,
    name: 'image_4',
    description: 'Calm waves rolling on a sunny beach.',
    imageUrl: 'images/image_4.jpg',
  },
  {
    id: 5,
    name: 'image_5',
    description: 'Golden dunes stretching far into the horizon.',
    imageUrl: 'images/image_5.jpg',
  },
  {
    id: 6,
    name: 'image_6',
    description: 'Majestic snow-covered mountains under a blue sky.',
    imageUrl: 'images/image_6.jpg',
  },
  {
    id: 7,
    name: 'image_7',
    description: 'Bright colorful flowers in full bloom.',
    imageUrl: 'images/image_7.jpg',
  },
  {
    id: 8,
    name: 'image_8',
    description: 'Clear night sky filled with stars.',
    imageUrl: 'images/image_8.jpg',
  },
  {
    id: 9,
    name: 'image_9',
    description: 'Peaceful river flowing through the valley.',
    imageUrl: 'images/image_9.jpg',
  },
  {
    id: 10,
    name: 'image_10',
    description: 'Colorful fall leaves carpeting the ground.',
    imageUrl: 'images/image_10.jpg',
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
          <div
            key={id}
            className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-32 object-cover"
              loading="lazy"
            />
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

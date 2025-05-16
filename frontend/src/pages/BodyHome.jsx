import React from 'react';

// Image imports
import image_1 from '../assets/images/sun_set.jpg';
import image_2 from '../assets/images/nightcity.jpg';
import image_3 from '../assets/images/aserene.jpg';
import image_4 from '../assets/images/calm_beach.jpg';
import image_5 from '../assets/images/golden_dunes.jpg';
import image_6 from '../assets/images/snow_mountain.jpg';
import image_7 from '../assets/images/color_full_flower.jpg';
import image_8 from '../assets/images/clear_night_star.jpg';
import image_9 from '../assets/images/peacfull_river.jpg';
import image_10 from '../assets/images/colorfull_fall_leaves.jpg';

const imagesData = [
  { id: 1, description: 'A beautiful view of the sunset over the mountains.', image: image_1 },
  { id: 2,  description: 'Nighttime city skyline sparkling with lights.', image: image_2 },
  { id: 3,  description: 'A serene path through a lush green forest.', image: image_3 },
  { id: 4, description: 'Calm waves rolling on a sunny beach.', image: image_4 },
  { id: 5, description: 'Golden dunes stretching far into the horizon.', image: image_5 },
  { id: 6,  description: 'Majestic snow-covered mountains under a blue sky.', image: image_6 },
  { id: 7, description: 'Bright colorful flowers in full bloom.', image: image_7 },
  { id: 8,  description: 'Clear night sky filled with stars.', image: image_8 },
  { id: 9,  description: 'Peaceful river flowing through the valley.', image: image_9 },
  { id: 10,  description: 'Colorful fall leaves carpeting the ground.', image: image_10 },
];
const BodyHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Images grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
        {imagesData.map(({ id, name, description, image }) => (
          <div
            key={id}
            className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={image}
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
    </div>
  );
};

export default BodyHome;

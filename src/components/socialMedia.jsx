import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
} from 'react-icons/fa';

const SocialMediaWidget = () => {
  const socialMedia = [
    {
      platform: 'Facebook',
      label: 'Fans',
      count: '34,456',
      color: 'bg-blue-600',
      icon: <FaFacebookF className="w-6 h-6" />,
    },
    {
      platform: 'Twitter',
      label: 'Followers',
      count: '34,456',
      color: 'bg-blue-400',
      icon: <FaTwitter className="w-6 h-6" />,
    },
    {
      platform: 'YouTube',
      label: '',
      count: '34,456',
      color: 'bg-red-600',
      icon: <FaYoutube className="w-6 h-6" />,
    },
    {
      platform: 'Instagram',
      label: 'Followers',
      count: '34,456',
      color: 'bg-purple-600',
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      platform: 'Vimeo',
      label: 'Followers',
      count: '34,456',
      color: 'bg-cyan-500',
      icon: <FaVimeoV className="w-6 h-6" />,
    },
    {
      platform: 'Dribbble',
      label: 'Followers',
      count: '34,456',
      color: 'bg-green-600',
      icon: <FaDribbble className="w-6 h-6" />,
    },
  ];

  return (
    <div className=" ">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {socialMedia.map((item) => (
          <div
            key={item.platform}
            className={`flex items-center justify-center space-x-2 p-3 rounded-lg text-white ${item.color}`}
          >
            {item.icon}
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{item.count}</span>
              {item.label && <span className="text-xs">{item.label}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaWidget;

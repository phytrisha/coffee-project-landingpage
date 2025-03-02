import React from 'react';
import Image from 'next/image';

interface ContentHighlightProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition?: 'left' | 'right'; // 'left' by default
}

const ContentHighlight: React.FC<ContentHighlightProps> = ({
  title,
  description,
  imageUrl,
  imagePosition = 'left',
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between pt-6 pb-6 max-w-6xl mx-auto">
      {imagePosition === 'left' && (
        <div className="md:w-1/2 p-4">
          <Image
            src={imageUrl}
            alt="Component Image"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
      {imagePosition === 'right' && (
        <div className="md:w-1/2 p-4">
          <Image
            src={imageUrl}
            alt="Component Image"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ContentHighlight;
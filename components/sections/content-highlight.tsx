import React from 'react';

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
    <div className="flex flex-col md:flex-row items-center justify-between p-6">
      {imagePosition === 'left' && (
        <div className="md:w-1/2 p-4">
          <img
            src={imageUrl}
            alt="Component Image"
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
          <img
            src={imageUrl}
            alt="Component Image"
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ContentHighlight;
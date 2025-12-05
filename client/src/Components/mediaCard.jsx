// mediacard.jsx
import React from 'react';
import './mediaCard.css';

const MediaCard = ({ title, coverImage, subtitle, onClick }) => {
  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="media-card"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={handleKeyDown}
      aria-label={title}
    >
      <img className="media-card-img" src={coverImage} alt={title} />
      <div className="media-card-overlay" />
      <div className="media-card-content">
        <h3 className="media-card-title">{title}</h3>
        {subtitle && <p className="media-card-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

const MediaGrid = ({ mediaItems = [] }) => {
  if (!mediaItems || mediaItems.length === 0) return null;

  return (
    <div className="media-grid">
      {mediaItems.map((item) => (
        <MediaCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export { MediaCard, MediaGrid };
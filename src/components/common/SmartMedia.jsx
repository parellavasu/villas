import React, { useState } from 'react';
import { Camera, CheckCircle2, Film } from 'lucide-react';

export default function SmartMedia({
  media,
  alt = 'Antelia Groves Luxury Architecture',
  className = '',
  containerClassName = '',
  showBadge = false,
  badgePosition = 'top-left', // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  style = {},
  priority = false,
}) {
  const [hasError, setHasError] = useState(false);

  // Normalize media input
  const mediaObj = typeof media === 'string' ? { url: media } : (media || {});
  
  // Detection logic
  const isVideo = Boolean(mediaObj.videoUrl);
  const isRealPhoto = Boolean(mediaObj.realPhotoUrl);
  const mediaSrc = isRealPhoto
    ? mediaObj.realPhotoUrl
    : (mediaObj.url || '/images/antelia_villa_exterior.jpg');

  const badgePositionClasses = {
    'top-left': 'top-3.5 left-3.5',
    'top-right': 'top-3.5 right-3.5',
    'bottom-left': 'bottom-3.5 left-3.5',
    'bottom-right': 'bottom-3.5 right-3.5',
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {isVideo ? (
        <video
          src={mediaObj.videoUrl}
          poster={mediaObj.posterUrl || mediaObj.url}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover ${className}`}
          style={style}
        />
      ) : (
        <img
          src={mediaSrc}
          alt={mediaObj.alt || alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={(e) => {
            if (!hasError && mediaObj.url && e.target.src !== mediaObj.url) {
              setHasError(true);
              e.target.src = mediaObj.url;
            }
          }}
          className={`w-full h-full object-cover ${className}`}
          style={style}
        />
      )}

      {/* Verified Status Badge Overlay (Transparent, Architectural) */}
      {showBadge && (
        <div className={`absolute ${badgePositionClasses[badgePosition]} z-20 pointer-events-none`}>
          {isVideo ? (
            <div className="flex items-center space-x-1.5 bg-[#0E1310]/80 backdrop-blur-md px-2.5 py-1 border border-white/15 text-[9.5px] font-mono tracking-widest text-[#B8A58A] uppercase rounded-xs">
              <Film className="w-3 h-3 text-[#B8A58A]" />
              <span>PROJECT CINEMATOGRAPHY</span>
            </div>
          ) : isRealPhoto ? (
            <div className="flex items-center space-x-1.5 bg-[#0E1310]/85 backdrop-blur-md px-2.5 py-1 border border-emerald-500/30 text-[9.5px] font-mono tracking-widest text-emerald-400 uppercase rounded-xs">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>ACTUAL PROJECT PHOTOGRAPHY</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1.5 bg-[#0E1310]/80 backdrop-blur-md px-2.5 py-1 border border-white/15 text-[9.5px] font-mono tracking-widest text-[#D8D4CA] uppercase rounded-xs">
              <Camera className="w-3 h-3 text-[#B8A58A]" />
              <span>ARCHITECTURAL VISUALIZATION</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

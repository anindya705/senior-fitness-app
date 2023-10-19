import React, { useState } from 'react';
import { Card, CardMedia } from '@mui/material';

export default function FormChecker() {
  const [showVideo, setShowVideo] = useState(false);

  const handleCheckForm = () => {
    setShowVideo(true);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: '0 auto', padding: '16px' }}>
      {showVideo && (
        <CardMedia
          component="video"
          src="your-video-source.mp4"
          autoPlay
          loop
          muted
          sx={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            paddingBottom: '56.25%', // 16:9 aspect ratio (adjust as needed)
            overflow: 'hidden',
          }}
        />
      )}
      {!showVideo && (
        <button onClick={handleCheckForm} style={{ display: 'block', margin: '0 auto' }}>
          Check your Form
        </button>
      )}
    </Card>
  );
}

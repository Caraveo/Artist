import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardActionArea, Typography } from '@mui/material';
import Lightbox from '../components/Lightbox';
import PageLayout from '../components/PageLayout';

const Gestures = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/Gestures/IMG_0136.PNG',
    '/images/Gestures/IMG_0137.PNG',
    '/images/Gestures/IMG_0138.PNG',
    '/images/Gestures/IMG_0139.PNG',
    '/images/Gestures/IMG_0140.PNG',
    '/images/Gestures/IMG_0141.PNG',
    '/images/Gestures/IMG_0142.PNG',
    '/images/Gestures/IMG_0143.PNG',
    '/images/Gestures/IMG_0144.PNG',
    '/images/Gestures/IMG_0147.jpeg',
    '/images/Gestures/IMG_0148.jpeg',
    '/images/Gestures/IMG_0150.jpeg',
    '/images/Gestures/IMG_0206.jpeg',
    '/images/Gestures/IMG_0209.jpeg',
    '/images/Gestures/IMG_0424.PNG'
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <PageLayout title="Gestures">
      <Box sx={{ p: 3, mt: 8 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: 'Playfair Display',
            mb: 4,
          }}
        >
          Gestures Series
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 4 }}
        >
          Exploring human form and movement in a digital format
        </Typography>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea onClick={() => handleImageClick(index)}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt={`Gesture ${index + 1}`}
                    sx={{ objectFit: 'cover' }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Lightbox
          open={lightboxOpen}
          onClose={handleClose}
          images={images}
          currentIndex={currentImageIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          title="Gesture"
        />
      </Box>
    </PageLayout>
  );
};

export default Gestures; 
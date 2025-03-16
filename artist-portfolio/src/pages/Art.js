import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardActionArea, Typography, CardContent } from '@mui/material';
import Lightbox from '../components/Lightbox';
import PageLayout from '../components/PageLayout';

const Art = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const artCollection = {
    title: 'Papeles Series',
    images: [
      '/images/Papeles/IMG_5717.JPG',
      '/images/Papeles/IMG_5728.JPG',
      '/images/Papeles/IMG_5729.JPG',
      '/images/Papeles/IMG_5731.JPG',
      '/images/Papeles/IMG_6044.jpg',
      '/images/Papeles/IMG_6529_2B2.jpg',
      '/images/Papeles/IMG_6540+2.jpg'
    ],
    description: 'Exploring the intersection of paper and artistic expression'
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === artCollection.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? artCollection.images.length - 1 : prev - 1));
  };

  return (
    <PageLayout title="Art">
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
          {artCollection.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 4 }}
        >
          {artCollection.description}
        </Typography>
        <Grid container spacing={3}>
          {artCollection.images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardActionArea onClick={() => handleImageClick(index)}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={image}
                    alt={`${artCollection.title} ${index + 1}`}
                    sx={{ objectFit: 'cover' }}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: 'Playfair Display' }}
                  >
                    {artCollection.title} #{index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Lightbox
          open={lightboxOpen}
          onClose={handleClose}
          images={artCollection.images}
          currentIndex={currentImageIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          title={artCollection.title}
        />
      </Box>
    </PageLayout>
  );
};

export default Art; 
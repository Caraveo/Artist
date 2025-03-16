import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardActionArea, Typography } from '@mui/material';
import Lightbox from '../components/Lightbox';
import PageLayout from '../components/PageLayout';

const Works = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const works = [
    {
      title: 'Works Collection',
      images: [
        '/images/Works/IMG_0027.jpg',
        '/images/Works/IMG_0028.jpeg'
      ],
      description: 'A collection of diverse artistic works showcasing various techniques and styles'
    }
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === works[0].images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? works[0].images.length - 1 : prev - 1));
  };

  return (
    <PageLayout>
      {works.map((collection, collectionIndex) => (
        <Box key={collectionIndex} sx={{ p: 3, mt: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              mb: 4,
            }}
          >
            {collection.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            {collection.description}
          </Typography>
          <Grid container spacing={2}>
            {collection.images.map((image, imageIndex) => (
              <Grid item xs={12} sm={6} md={4} key={imageIndex}>
                <Card>
                  <CardActionArea onClick={() => handleImageClick(imageIndex)}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={image}
                      alt={`Work #${imageIndex + 1}`}
                      sx={{ objectFit: 'cover' }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <Lightbox
        open={lightboxOpen}
        onClose={handleClose}
        images={works.map(collection => collection.images).flat()}
        currentIndex={currentImageIndex}
        onNext={handleNext}
        onPrev={handlePrev}
        title="Work"
      />
    </PageLayout>
  );
};

export default Works; 
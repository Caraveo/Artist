import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardActionArea, Typography } from '@mui/material';
import Lightbox from '../components/Lightbox';
import PageLayout from '../components/PageLayout';

const Pieces = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pieces = [
    {
      title: 'Modern Collection',
      images: [
        '/images/Modern/1275.JPG',
        '/images/Modern/1276.JPG',
        '/images/Modern/I1272.JPG'
      ],
      description: 'Contemporary artistic expressions'
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
    setCurrentImageIndex((prev) => (prev === pieces[0].images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? pieces[0].images.length - 1 : prev - 1));
  };

  return (
    <PageLayout title="Pieces">
      {pieces.map((collection, collectionIndex) => (
        <Box key={collectionIndex} sx={{ mb: 6 }}>
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
                      alt={`${collection.title} ${imageIndex + 1}`}
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
        images={pieces.map(collection => collection.images).flat()}
        currentIndex={currentImageIndex}
        onNext={handleNext}
        onPrev={handlePrev}
        title="Piece"
      />
    </PageLayout>
  );
};

export default Pieces; 
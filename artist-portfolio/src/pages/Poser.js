import React from 'react';
import { Typography, Box, Paper, Container, Divider } from '@mui/material';
import PageLayout from '../components/PageLayout';

const Poser = () => {
  return (
    <PageLayout title="POSER">
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              mb: 2,
              textAlign: 'center'
            }}
          >
            POSER
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              mb: 4,
              textAlign: 'center',
              color: 'primary.main'
            }}
          >
            $500.00
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              mb: 3,
              color: 'text.primary'
            }}
          >
            About the Book
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            Art Square Issue 
            A reference title curated for private, non-commercial use, POSER presents a striking collection of over 100 cropped pictographs and images. This visual anthology explores the young male figure as an enduring muse across the art world—spanning sketches, photographs, and drawings that inspire artists in their pursuit of form, emotion, and beauty.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              mb: 3,
              color: 'text.primary'
            }}
          >
            Features & Details
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Primary Category: Arts & Photography Books
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Additional Categories: Education
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Project Option: Large Format Landscape, 13×11 in, 33×28 cm
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              # of Pages: 138
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Publish Date: Dec 17, 2024
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Language: English
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: 4
            }}
          >
            <video
              controls
              width="100%"
              style={{
                maxWidth: '800px',
                borderRadius: '8px'
              }}
            >
              <source src="/video/poser.m4v" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Paper>
      </Container>
    </PageLayout>
  );
};

export default Poser; 
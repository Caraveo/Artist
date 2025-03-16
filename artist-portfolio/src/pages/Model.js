import React from 'react';
import { Typography, Box, Paper, Container } from '@mui/material';
import PageLayout from '../components/PageLayout';

const Model = () => {
  return (
    <PageLayout title="Model">
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
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
            Become Part of the Creative Process
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            Interested in modeling for Jon, an artist specializing in nude abstract figurative pieces? This unique experience can foster confidence and self-awareness, as you become a part of the creative process.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            By posing as a live model, you will tap into the liberating spirit of artistic expression. In a supportive and respectful environment, you will have the chance to let go of inhibitions and explore your own unique presence. The experience can help you develop a deeper understanding of yourself, your body, and its relationship to the world around you. As Jon captures the subtleties of human form on canvas, you will become an integral part of a creative process that celebrates individuality and freedom.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            Models will receive fair compensation for each session, and Jon will work with them to ensure their comfort and boundaries are respected throughout the experience. Please note that, for models under 18 years old, a parent or guardian's signature on our model agreement form is required. This ensures that both parties are aware of and comfortable with the arrangement. If interested in posing as a live model, please contact Jon to schedule an appointment and discuss further details.
          </Typography>
        </Paper>
      </Container>
    </PageLayout>
  );
};

export default Model; 
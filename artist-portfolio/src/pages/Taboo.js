import React from 'react';
import { Typography, Box, Paper, Container } from '@mui/material';
import PageLayout from '../components/PageLayout';

const Taboo = () => {
  return (
    <PageLayout title="Taboo">
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
              mb: 3,
              color: 'text.primary',
              textAlign: 'center'
            }}
          >
            You're Invited to "Taboo" - An Art Exhibition by Jon Caraveo
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            We are honored to invite you to "Taboo," an exclusive art exhibition showcasing the powerful paintings of Jon Caraveo. This exhibit presents a deeply evocative exploration of the male youth form, where each piece conveys raw emotion and movement through striking silhouettes. Caraveo's work transcends the ordinary, engaging with themes of self-expression, vulnerability, and the human condition, set against profound, minimalist backgrounds that evoke a sense of introspection and narrative depth.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            The exhibition will be held on February 14, 2026, a significant date coinciding with both the artist's birthday and Valentine's Day—a celebration of love, life, and the transformative power of art. This event is open to the public but will be an intimate affair, with only 24 shared table seats available to ensure a personal and immersive experience with the work and its creator. Due to limited seating, we encourage you to RSVP to secure your place.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            Attendees are kindly asked to wear their Sunday best, honoring the cultural and artistic significance of this gathering. In celebration of the event, we will provide a selection of delicious cultural dishes, including green chili, red tamales, and Mexican Horchata, all offered at no cost to our guests.
          </Typography>

          <Typography
            variant="body1"
            sx={{ 
              mb: 3, 
              lineHeight: 1.8,
              fontStyle: 'italic',
              textAlign: 'center',
              fontFamily: 'Playfair Display'
            }}
          >
            Join us for an evening that promises to be more than just an exhibition, but a journey into the heart of art, culture, and community.
          </Typography>
        </Paper>
      </Container>
    </PageLayout>
  );
};

export default Taboo; 
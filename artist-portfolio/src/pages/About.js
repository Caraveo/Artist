import React from 'react';
import { Typography, Box, Grid, Paper, Container } from '@mui/material';
import PageLayout from '../components/PageLayout';

const About = () => {
  return (
    <PageLayout title="About">
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontFamily: 'Playfair Display' }}
          >
            About the Artist
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            Jon Caraveo is a Modern Contemporary Artist known for his evocative oil paintings. His signature style features striking silhouettes of orange nude male youths, set against stark dark backgrounds. These sensual figures serve as powerful symbols of suppressed emotions from his childhood, offering a deeply personal narrative through minimalist yet expressive compositions. Jon's work invites viewers into a world of emotional complexity, exploring themes of identity, memory, and self-discovery through his unique artistic lens.
          </Typography>
        </Paper>
      </Container>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontFamily: 'Playfair Display' }}
            >
              Artist Statement
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 3, lineHeight: 1.8 }}
            >
              As an artist, I explore the intersection of human form, movement, and artistic expression.
              My work spans various mediums, from traditional sketches to modern digital pieces,
              always seeking to capture the essence of human emotion and physicality.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 3, lineHeight: 1.8 }}
            >
              Through my art, I aim to challenge conventional perspectives and create meaningful
              connections between the viewer and the subject matter. Each piece is a journey into
              the depths of human experience, expressed through careful attention to detail and
              thoughtful composition.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontFamily: 'Playfair Display' }}
            >
              Contact & Collaboration
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 3, lineHeight: 1.8 }}
            >
              I'm always open to new collaborations and opportunities. Whether you're interested
              in commissioning a piece, modeling for a project, or discussing potential
              partnerships, I'd love to hear from you.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: 'Playfair Display' }}
              >
                Get in Touch
              </Typography>
              <Typography variant="body1" paragraph>
                Email: caraveo@me.com
              </Typography>
              <Typography variant="body1" paragraph>
                Instagram: @sombretch
              </Typography>
              <Typography variant="body1" paragraph>
                YouTube: JonCaraveo
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default About; 
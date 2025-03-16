import React from 'react';
import { Typography, Box, Paper, Container, Divider } from '@mui/material';
import PageLayout from '../components/PageLayout';

const CV = () => {
  return (
    <PageLayout title="CV">
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
            Jon Caraveo · Artist
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ 
              mb: 4, 
              lineHeight: 1.8,
              textAlign: 'center',
              fontStyle: 'italic',
              fontFamily: 'Playfair Display'
            }}
          >
            Art. Art has been a staple in my journey, allowing me to express the complexities of human identity through bold, evocative portrayals of male youth figures.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              mb: 2,
              color: 'text.primary'
            }}
          >
            PROFILE
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            Results-oriented platform professional with 20+ years of experience in privately held enterprises. Proven track record in complex and smart work-intensive industries, delivering value, innovation in Finance, Business Strategy, and Corporate Planning.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              mb: 2,
              color: 'text.primary'
            }}
          >
            EXPERIENCE
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 600
            }}
          >
            Founder, Ziawe.com; Artesia, New Mexico — 2020-Present
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            Founded a Research and Development company that specializes in Augmented Reality hardware.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 600
            }}
          >
            Caraveo Enterprises; Artesia, New Mexico - 2000-2010
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            Implemented point of sale system, menu system, and social strategy, assisted the efficiency of business operations, and increased overall business finances, products, and processes.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              mb: 2,
              color: 'text.primary'
            }}
          >
            EDUCATION
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 600
            }}
          >
            Harvard X PredictionX: Omens, Oracles, and Prophecies - 2022
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            A course of study offered by HarvardX, an online learning initiative of Harvard University.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 600
            }}
          >
            Full Sail University: Associate of Science in Mobile Development - 2020
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            Completed the requirements to be awarded the associate degree at Full Sail University.
          </Typography>
        </Paper>
      </Container>
    </PageLayout>
  );
};

export default CV; 
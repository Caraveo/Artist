import React from 'react';
import { Typography, Box, Paper, Container } from '@mui/material';
import PageLayout from './PageLayout';

const FooterPage = ({ title, content }) => {
  return (
    <PageLayout title={title}>
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
            component="h2"
            gutterBottom
            sx={{ fontFamily: 'Playfair Display', mb: 4 }}
          >
            {title}
          </Typography>
          <Box sx={{ lineHeight: 1.8 }}>
            {content.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                paragraph
                sx={{ mb: 3 }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Paper>
      </Container>
    </PageLayout>
  );
};

export default FooterPage; 
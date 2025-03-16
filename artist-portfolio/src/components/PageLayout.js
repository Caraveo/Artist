import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';

const PageLayout = ({ title, children }) => {
  useEffect(() => {
    document.title = title ? `JON CARAVEO - ${title}` : 'JON CARAVEO';
  }, [title]);

  return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            mb: 4,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default PageLayout; 
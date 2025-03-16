import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const footerLinks = [
    { text: 'Model', path: '/model' },
    { text: 'Commission', path: '/commission' },
    { text: 'Taboo', path: '/taboo' },
    { text: 'Fund', path: '/fund' },
    { text: 'Diary', path: '/diary' },
    { text: 'Papeles', path: '/papeles' },
    { text: 'Poser', path: '/poser' },
    { text: 'CV', path: '/cv' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <IconButton
                color="inherit"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
              Quick Links
            </Typography>
            <Grid container spacing={2}>
              {footerLinks.map((link) => (
                <Grid item xs={6} key={link.text}>
                  <Link
                    component={RouterLink}
                    to={link.path}
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
        <Typography
          variant="body2"
          align="center"
          sx={{ fontFamily: 'Playfair Display' }}
        >
          © {new Date().getFullYear()} Artist Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 
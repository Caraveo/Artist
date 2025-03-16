import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'WORKS', path: '/works' },
    { text: 'PIECES', path: '/pieces' },
    { text: 'GESTURES', path: '/gestures' },
    { text: 'ART', path: '/art' },
    { text: 'ABOUT', path: '/about' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ backgroundColor: theme.palette.background.default }}>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component={RouterLink}
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{ 
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <ListItemText 
            primary={item.text} 
            primaryTypographyProps={{
              fontFamily: 'Playfair Display',
              color: theme.palette.text.primary,
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: theme.palette.text.primary,
            fontFamily: 'Playfair Display',
            fontWeight: 500,
          }}
        >
          JON CARAVEO
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              sx={{ color: theme.palette.text.primary }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              PaperProps={{
                sx: {
                  backgroundColor: theme.palette.background.default,
                  width: 240,
                }
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: theme.palette.text.primary,
                  fontFamily: 'Playfair Display',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
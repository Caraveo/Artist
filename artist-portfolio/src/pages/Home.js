import React, { useState } from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const [images] = useState([
    '/images/Gestures/IMG_0140.PNG',
    '/images/Gestures/IMG_0136.PNG',
    '/images/Gestures/IMG_0137.PNG',
    '/images/Gestures/IMG_0138.PNG',
    '/images/Gestures/IMG_0139.PNG',
    '/images/Gestures/IMG_0141.PNG',
    '/images/Gestures/IMG_0142.PNG',
    '/images/Gestures/IMG_0143.PNG',
    '/images/Gestures/IMG_0144.PNG',
    '/images/Gestures/IMG_0147.jpeg',
    '/images/Gestures/IMG_0148.jpeg',
    '/images/Gestures/IMG_0150.jpeg',
    '/images/Gestures/IMG_0206.jpeg',
    '/images/Gestures/IMG_0209.jpeg',
    '/images/Gestures/IMG_0424.PNG'
  ]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === images.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === 0 ? images.length - 1 : prevActiveStep - 1
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ 
      height: '100vh', 
      position: 'relative',
      backgroundColor: theme.palette.background.default,
      overflow: 'hidden',
    }}>
      <BindKeyboardSwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ height: '100%' }}
        containerStyle={{ height: '100%' }}
        slideStyle={{ height: '100%' }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              backgroundColor: theme.palette.background.default,
            }}
          >
            <img
              src={image}
              alt={`Gestures #${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                bottom: theme.spacing(2),
                left: '50%',
                transform: 'translateX(-50%)',
                color: theme.palette.text.primary,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: theme.spacing(1, 2),
                borderRadius: theme.shape.borderRadius,
              }}
            >
              Gestures #{index + 1}
            </Typography>
          </Box>
        ))}
      </BindKeyboardSwipeableViews>

      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          left: theme.spacing(2),
          top: '50%',
          transform: 'translateY(-50%)',
          color: theme.palette.text.primary,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          },
          zIndex: 1,
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: theme.spacing(2),
          top: '50%',
          transform: 'translateY(-50%)',
          color: theme.palette.text.primary,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          },
          zIndex: 1,
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default Home; 
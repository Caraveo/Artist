import React from 'react';
import { Box, IconButton, Typography, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Lightbox = ({ open, onClose, images, currentIndex, onNext, onPrev, title }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          bgcolor: 'background.paper',
          outline: 'none',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'text.primary',
            zIndex: 1,
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={onPrev}
            sx={{
              position: 'absolute',
              left: 8,
              color: 'text.primary',
              zIndex: 1,
              bgcolor: 'background.paper',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <img
            src={images[currentIndex]}
            alt={`${title} #${currentIndex + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100vh',
              objectFit: 'contain',
            }}
          />

          <IconButton
            onClick={onNext}
            sx={{
              position: 'absolute',
              right: 8,
              color: 'text.primary',
              zIndex: 1,
              bgcolor: 'background.paper',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'text.primary',
            bgcolor: 'background.paper',
            px: 2,
            py: 1,
            borderRadius: 1,
          }}
        >
          {title} #{currentIndex + 1}
        </Typography>
      </Box>
    </Modal>
  );
};

export default Lightbox; 
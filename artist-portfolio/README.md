# Artist Portfolio Website

A modern, responsive artist portfolio website built with React, Material-UI, and Express.js.

## Features

- Fullscreen image gallery with swipe support
- Responsive design for all devices
- Modern Material-UI components
- Google Fonts integration
- Docker support for easy deployment
- Express.js backend

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose (for containerized deployment)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd artist-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `public/images` directory and add your gallery images:
```bash
mkdir -p public/images
```

## Development

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Production Build

To create a production build:

```bash
npm run build
```

## Docker Deployment

To run the application using Docker:

```bash
docker-compose up --build
```

The application will be available at `http://localhost:3000`

## Project Structure

```
artist-portfolio/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── public/        # Static files
│   ├── styles/        # CSS styles
│   ├── utils/         # Utility functions
│   ├── index.js       # Entry point
│   └── server.js      # Express server
├── docker/            # Docker configuration
├── package.json       # Dependencies and scripts
├── webpack.config.js  # Webpack configuration
└── README.md         # This file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
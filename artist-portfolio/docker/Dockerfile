FROM node:18-alpine

WORKDIR /app

# Copy package files and configuration
COPY package*.json ./
COPY .npmrc ./
COPY webpack.config.js ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy source files and assets
COPY src/ ./src/
COPY public/ ./public/
COPY .platform/ ./.platform/
COPY .ebextensions/ ./.ebextensions/

# Build the application
RUN npm run build

EXPOSE 3000

# Start the application
CMD ["npm", "start"] 
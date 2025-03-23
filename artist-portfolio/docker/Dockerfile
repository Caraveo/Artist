FROM node:18-alpine

WORKDIR /app

# Copy package files and configuration first
COPY package*.json ./
COPY .npmrc ./
COPY webpack.config.js ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy the entire project structure
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

# Start the application
CMD ["npm", "start"] 
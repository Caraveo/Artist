FROM node:18-alpine

WORKDIR /app

# Copy only package files first
COPY package*.json ./
COPY .npmrc ./
COPY webpack.config.js ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

# Start the application
CMD ["npm", "start"] 
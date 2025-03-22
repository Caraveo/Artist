FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./
COPY .npmrc ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the application (separate from install)
RUN npm run build

EXPOSE 3000

# Start the application
CMD ["npm", "start"] 
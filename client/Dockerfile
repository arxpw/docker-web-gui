# Use official Node.js image as base
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start Vite in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
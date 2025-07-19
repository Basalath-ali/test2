# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend app (for production build)
RUN npm run build

# Expose port (typically 3000 or 8080 for frontend dev servers)
EXPOSE 3000

# Start the frontend app (adjust as per your framework)
CMD ["npm", "start"]

# Use minimal image for Node
FROM node:alpine

# Install specific dependencies
RUN apk add --update python2 g++ make

# Create working directory
WORKDIR /app

# Add node_modules to Path
ENV PATH /app/node_modules/.bin:$PATH

# Copy dependencies
COPY package.json ./
COPY package-lock.json ./
# Install yarn
# RUN npm install -g yarn
# Install dependencies
RUN npm install

# Copy React ACM Website
COPY . ./

# Run Website

CMD ["npm", "start"]

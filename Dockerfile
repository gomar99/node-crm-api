FROM node:20-alpine

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy seluruh project termasuk scripts
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]

FROM node:12.18
WORKDIR /app
COPY package*.json ./
COPY src ./
COPY g* ./
COPY static ./
RUN npm install
RUN npm start

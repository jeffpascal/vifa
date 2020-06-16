FROM node:12.8
WORKDIR /app
COPY package.json ./
RUN npm install
ADD src ./src
COPY g* ./ 
ADD static ./static
EXPOSE 8000
RUN npm run startvm


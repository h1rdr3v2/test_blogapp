FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install --verbose
COPY . .
EXPOSE 3000
CMD ["npm","start"]
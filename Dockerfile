FROM node:8-slim

# Install http-server
RUN npm install -g http-server

# Export http server port
EXPOSE 8080

# App User
RUN mkdir /app && chown -R node:node /app
USER node
###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine As development

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm i

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node
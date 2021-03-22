FROM node:lts-alpine

# set working directory
WORKDIR /home/node/front

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /home/node/front/node_modules/.bin:$PATH

# install cli
RUN npm install -g @vue/cli

COPY ./front /home/node/front

RUN npm install

# start app
CMD ["npm", "run", "serve"]
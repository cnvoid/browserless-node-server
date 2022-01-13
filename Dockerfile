# FROM jelastic/nodejs

FROM  browserless/chrome:latest

RUN node -v
RUN npm -v
# RUN cd /usr/src/app
# RUN  nohup .start.sh >> /dev/null 2>&1 &
WORKDIR /app

COPY ./ /app

EXPOSE 3001
EXPOSE 3000
# CMD
ENTRYPOINT ["/bin/sh","-c","./entry.sh"]
# CMD node app.js


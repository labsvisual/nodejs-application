FROM    node:5.3.0
RUN     mkdir -p /usr/src/app
RUN     apt-get update && apt-get upgrade -y

RUN     apt-get install -y supervisor
RUN     mkdir -p /var/log/supervisor

COPY    package.json /usr/src/app/package.json
RUN     cd /usr/src/app && npm install

COPY    ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY    . /usr/src/app

WORKDIR /usr/src/app

EXPOSE  5500

CMD     [ "/usr/bin/supervisord" ]

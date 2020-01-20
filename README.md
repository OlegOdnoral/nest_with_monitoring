<p align="center">
  <a href="https://prometheus.io/" target="blank"><img src="https://artem.services/wp-content/uploads/2018/12/Prometheus-Logo.png" width="320" alt="Prometheus Logo" /></a>
</p>
<p align="center">
  <a href="https://grafana.com/" target="blank"><img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/07/grafana-logo.png" width="320" alt="Grafana Logo" /></a>
</p>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Prometheus](https://prometheus.io/) is an open-source systems monitoring and alerting toolkit originally built at [SoundCloud](https://soundcloud.com/).
[Grafana](https://grafana.com/) is the open source analytics and monitoring solution for every database.
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
[@digikare/nestjs-prom](https://www.npmjs.com/package/@digikare/nestjs-prom) prometheus module for Nest.

## Running the app

```bash
# install dependencies and run app in development mode
$ npm install && npm run start:dev

# install dependencies and run app in production mode
$ npm install && npm run start:prod
```

After app is runnings raw metrics will be available at [http://localhost:4200/metrics](http://localhost:4200/metrics)

## Start Prometheus with Grafana (Docker required)

```bash
# run from docker-compose.yml file
$ docker-compose up
```
<p>
After docker compose successfully executed Prometheus will be available at
<a href="http://localhost:9090" target="blank">http://localhost:9090</a>.
You can check services connection status at 
<a href="http://localhost:9090/new/targets" target="blank">http://localhost:9090/new/targets</a>.
</p>

<p>
Grafana will be available at <a href="http://localhost:3000" target="blank">http://localhost:3000</a>. 
</p>

1. You need add new data source to Grafana. Use service name from <strong>docker-compose.yml</strong> as domain for URL (<strong>by default http://prometheus:9090</strong>).
2. Set <strong>Scrape interval (example 10s)</strong> and <strong>HTTP Method to GET</strong>.
3. Click on <strong>Save & Test</strong> button, you should see <strong>Data source is working</strong> message. 
4. Click on <strong>Dashboard</strong> tab and import pre defined dashboard config and then click on dashboard name that was imported.
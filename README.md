# Vue, MongoDB login JS Boilerplate

<img src="http://vuejs.org/images/logo.png" height="50"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/527px-MongoDB-Logo.svg.png" height="50"> <img src="https://worldvectorlogo.com/logos/nodejs-icon.svg" height="50"> <img src="https://camo.githubusercontent.com/66747a6e05a799aec9c6e04a3e721ca567748e8b/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313336353838312f313931383337332f32653035373166612d376462632d313165332d383436352d3839356632393164343366652e706e67" height="50">

[![Known Vulnerabilities](https://snyk.io/test/github/icebob/vue-express-mongo-boilerplate/badge.svg)]
![Node 6](https://img.shields.io/badge/node-6.x.x-green.svg)
![VueJS 2](https://img.shields.io/badge/vuejs-2.3.x-green.svg)
![Webpack 2](https://img.shields.io/badge/webpack-2.6.x-green.svg)

This is a webapp boilerplate project with VueJS + MongoDB. It is NOT an out-of-box project. 
I make it in order to create an up-to-date starter repo which contains all important functions (user signup, login, oauth, profile, ...etc) except the business-logic. So when neccessary I can create a new webapp and only need to develop the business logic.

### [Live Demo](https://null/)

## Features

**Server-side**
* [x] **[Node.JS](https://nodejs.org)** v6.x.x
* [x] [MongoDB](https://www.mongodb.com/) with [Mongoose](https://github.com/Automattic/mongoose)
* [x] [i18next](http://i18next.com/) as the internationalization ecosystem (WORK IN PROGRESS)
* [x] Bundled server-side code with [Webpack 2](https://webpack.github.io/)

**Client-side**
* [x] **[VueJS 2.x](https://github.com/vuejs/vue)**
* [x] [Vuex](https://github.com/vuejs/vuex)
* [x] [Vue-router](https://github.com/vuejs/vue-router)
* [x] [element-ui] (https://github.com/ElemeFE/element)
* [x] [axios] (https://github.com/axios/axios)
* [x] [jsonwebtoken] (https://www.npmjs.com/package/jsonwebtoken)
* [x] **[Webpack 2](https://github.com/webpack/webpack)**
* [x] [SCSS](http://sass-lang.com/)
* [x] [PostCSS](https://github.com/postcss/postcss) with precss and autoprefixer
* [x] [Babel](https://babeljs.io/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# start server
node server.js

# start mongodb
mongod

```

Before start, you have to install production dependencies with npm: `npm install`

## License

This repo is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact

Copyright (C) 2016 Snake

[![@asherccohen](https://img.shields.io/badge/github-asherccohen-green.svg)](https://github.com/asherccohen) [![@asherccohen](https://img.shields.io/badge/twitter-iSnake_-blue.svg)](https://twitter.com/iSnake_)





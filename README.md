# get-res [![Build Status](https://travis-ci.org/kevva/get-res.svg?branch=master)](https://travis-ci.org/kevva/get-res)

> Get ten most popular screen resolutions.

## Install

```bash
$ npm install --save get-res
```

## Usage

```js
var getRes = require('get-res');

getRes(function (err, data) {
    console.log(data);
    // => ['1366x768','1024x768','1280x800','1920x1080','1440x900','768x1024', '1280x1024','1600x900','320x480','320x568']
})
```

## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global get-res
```

### Usage

```bash
$ get-res --help

Usage
  $ get-res
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)

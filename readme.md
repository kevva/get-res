# get-res [![Build Status](http://img.shields.io/travis/kevva/get-res.svg?style=flat)](https://travis-ci.org/kevva/get-res)

> Get ten most popular screen resolutions

## Install

```bash
$ npm install --save get-res
```

## Usage

```js
var getRes = require('get-res');

getRes(function (err, data) {
	console.log(data);
	// => [{item: '1366x768', percent: '20.34%'}, {item: '1280x800', percent: '9.23%'}, ...]
})
```

## CLI

```bash
$ npm install --global get-res
```

```bash
$ get-res --help

Usage
  $ get-res
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)

# get-res [![Build Status](http://img.shields.io/travis/kevva/get-res.svg?style=flat)](https://travis-ci.org/kevva/get-res)

> Get ten most popular screen resolutions


## Install

```
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


## API

### getRes(callback)

Gets ten most popular screen resolutions from [w3counter](http://www.w3counter.com/globalstats.php).

#### callback(err, data)

Type: `function`

##### data

Type: `array`

An array of objects containing the ten most popular resolutions.


## CLI

```
$ npm install --global get-res
```

```
$ get-res --help

  Usage
    $ get-res
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)

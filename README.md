# get-res [![Build Status](https://travis-ci.org/kevva/get-res.png?branch=master)](http://travis-ci.org/kevva/get-res)

Get ten most popular screen resolutions.

## Getting started

Install with [npm](https://npmjs.org/package/get-res): `npm install get-res`

## Example

```js
var getRes = require('get-res');

getRes(function (err, data) {
    console.log(data);
    // => ['1366x768','1024x768','1280x800','1920x1080','1440x900','768x1024', '1280x1024','1600x900','320x480','320x568']
})
```

## API

### getRes(cb)

Returns an array with the ten most popular resolutions from [w3counter.com](http://www.w3counter.com/globalstats.php).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) [Kevin Mårtensson](https://github.com/kevva)

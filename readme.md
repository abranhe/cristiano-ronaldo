# cristiano-ronaldo [![Github](https://github.com/abranhe/cristiano-ronaldo/workflows/build/badge.svg)](https://github.com/abranhe/cristiano-ronaldo) [![Travis](https://travis-ci.com/abranhe/cristiano-ronaldo.svg?branch=master)](https://travis-ci.com/abranhe/cristiano-ronaldo) [![License](https://img.shields.io/github/license/abranhe/cristiano-ronaldo.svg)](https://github.com/abranhe/cristiano-ronaldo/blob/master/license) [![npm](https://img.shields.io/npm/v/cristiano-ronaldo.svg?logo=npm)](https://npmjs.org/cristiano-ronaldo)

> Stats about Cristiano Ronaldo

Cristiano Ronaldo is one of the best players in football (soccer) history. This package give you live stats about Ronaldo fetching the data from [messivsronaldo.net](https://messivsronaldo.net/).

Any changes on the website will affect whether this package works or not, so if you find any issues while using this package please open an issue imidialty.

## Install

```
$ npm install cristiano-ronaldo
```

<details>
<summary>
  Other options?
</summary>

###### npm

```
$ npm install cristiano-ronaldo
```

###### yarn

```
$ yarn add cristiano-ronaldo
```

###### Github Registry

```
$ npm install abranhe@cristiano-ronaldo
```

</details>

## Usage

```js
import cristianoRonaldo from 'cristiano-ronaldo';
  
(async () => {
  const cr7 = await cristianoRonaldo();
  // {
  //   goals: 716,
  //   assists: 220,
  //   apps: 991,
  //   penaltis: 118,
  //   penaltisMissed: 23,
  //   hatTricks: 56,
  //   goalRatio: 0.72
  // }
})();
```

## API

### cristianoRonaldo()

Type: `string`

Returns live stats about Cristiano Ronaldo.

## License

MIT © [Abraham Hernandez](https://abranhe.com)
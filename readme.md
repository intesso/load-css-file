# load-css-file

insert css file into the `<head>` element

# install

```bash
npm install load-css-file --save
```

# usage

```js

var loadCss = require('load-css-file');
loadCss('https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css');

// or

loadCss({
  href: 'normalize.css',
  rel: 'stylesheet',
  text: 'text/css'
})

```

# api

## loadCss(source)

source `string` where to load the css from.

## loadCss(object)

css attribute `object`. For available attributes see html `link` specification.
e.g. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link


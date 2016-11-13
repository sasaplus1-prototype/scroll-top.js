# scroll-top.js

cross browser scrollTop

## Installation

```sh
$ npm install sasaplus1-prototype/scroll-top.js
```

## Usage

via `require()`

```js
var scrollTop = require('scroll-top');
```

via `<script>`

```html
<script src="scroll-top.min.js"></script>
```

### Example

```js
var beforeScrollTop = scrollTop.get();

scrollTop.set(0);
```

## Functions

### get()

- `return`
  - `Number`

get value of scrollTop.

### set(value)

- `value`
  - `Number`

set value to scrollTop.

## License

The MIT license.

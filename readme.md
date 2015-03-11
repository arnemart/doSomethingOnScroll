doSomethingOnScroll
===================

Somewhat performant onscroll wrapper thing that debounces to requestAnimationFrame.

## Installation

```
$ npm install [--save] do-something-on-scroll
```

## Usage

```javascript
var doSomethingOnScroll = require('do-something-on-scroll');

function handler(offset, prevOffset) {
    console.log(offset, prevOffset);
}

doSomethingOnScroll(handler);

doSomethingOnScroll.cancel(handler);
```

## License

MIT

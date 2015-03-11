doSomethingOnScroll
===================

Somewhat performant onscroll wrapper thing that debounces to requestAnimationFrame.

## Usage

```javascript
var doSomethingOnScroll = require('doSomethingOnScroll');

doSomethingOnScroll(function(offset, prevOffset) {
    console.log(offset, prevOffset);
});

```

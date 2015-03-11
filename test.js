var doSomethingOnScroll = require('./');

var box = document.getElementById('box');

doSomethingOnScroll(function(offset) {
    console.log(offset);
    box.style.top = (offset + 10) + 'px';
});

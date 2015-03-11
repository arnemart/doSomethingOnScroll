var doStuffOnScroll = require('./');

var box = document.getElementById('box');

doStuffOnScroll(function(pos) {
    console.log(pos);
    box.style.top = (pos + 10) + 'px';
});

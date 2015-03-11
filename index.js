var raf = require('raf-component');

var currentlyScrolling = false;
var handlers = [];
var prevOffset;
var scrollTimeout;

function onScroll(evt) {
    if (!currentlyScrolling) {
        currentlyScrolling = true;
        update();
    }
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        currentlyScrolling = false;
    }, 50);
}

function update() {
    var offset = document.body.scrollTop;
    if (offset != prevOffset) {
        for (var i = 0, j = handlers.length; i < j; i++) {
            handlers[i](offset, prevOffset);
        }
        prevOffset = offset;
    }
    if (currentlyScrolling) {
        raf(update);
    }
}

module.exports = function(handler) {
    handlers.push(handler);
    if (handlers.length == 1) {
        window.addEventListener('scroll', onScroll);
    }
};

module.exports.cancel = function(handler) {
    var index = handlers.indexOf(handler);
    if (index > -1) {
        handlers.splice(index, 1);
    }
    if (handlers.length == 0) {
        window.removeEventListener('scroll', onScroll);
    }
};

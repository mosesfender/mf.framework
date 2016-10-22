    window.batchAddListener = function (elements, eventName, callback) {
        var events = eventName.split(',');
        for (var i = 0; i < elements.length; i++) {
            for (var e = 0; e < events.length; e++) {
                elements[i].addEventListener(events[e].trim(), callback);
            }
        }
    };

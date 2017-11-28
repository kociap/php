// 'use strict';

var Ajax = (() => {
    function request(url, options) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    function send(url, data) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if(request.readyState === 4) {
                    if(request.status === HttpStatus.OK) {
                        resolve();
                    } else {
                        reject(JSON.parse(request.responseText));
                    }
                }
            };

            request.open('POST', url);
            request.send(JSON.stringify(data));
        });
    }

    return {
        request: request,
        send: send
    };
})();
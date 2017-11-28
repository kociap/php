'use strict';

var Ajax = (() => {
    function get(url, options) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if(request.readyState === 4) {
                    if(request.status === HttpStatus.OK) {
                        resolve(JSON.parse(request.responseText));
                    } else {
                        reject(JSON.parse(request.responseText));
                    }
                }
            };

            request.open('GET', url);
            request.send(null);
        });
    }

    function post(url, data) {
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

    function getDOM(url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if(request.readyState === 4) {
                    if(request.status === HttpStatus.OK) {
                        resolve(request.responseXML);
                    } else {
                        reject(JSON.parse(request.responseText));
                    }
                }
            };

            request.open('POST', url);
            request.responseType = 'document';
            request.send(JSON.stringify(data));
        });
    }

    return {
        get: get,
        post: post,
        getDOM: getDOM
    };
})();
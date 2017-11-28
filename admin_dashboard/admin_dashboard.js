'use strict';

(() => {
    // For initial page load
    loadAndDisplayItems();
    loadAndDisplayOrders();

    // Bind for pagination or something if you need
    Array.from(document.querySelectorAll(/* Selector for orders */)).forEach((element) => {
        loadAndDisplayOrders();
    });
    Array.from(document.querySelectorAll(/* Selector for items */)).forEach((element) => {
        loadAndDisplayItems();
    });

    // Add some parameters so that the functions can fetch
    //   the right orders/items
    function loadAndDisplayOrders() {
        Ajax.request(Urls.ADMIN_DASHBOARD_ITEMS, /* options */).then((response) => {
            // Display elements
        });
    }

    function loadAndDisplayItems() {
        Ajax.request(Urls.ADMIN_DASHBOARD_ORDERS, /* options */).then((response) => {
            // Display elements
        });
    }

})();
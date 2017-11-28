'use strict';

Ajax.getDOM('../item/item.template.html').then((template) => {
    let itemsList = document.getElementById('items-list');

    function refreshItemsEverySecond(items) {
        itemsList.innerHTML = '';
        for(let i = 0; i < items.length; ++i) {
            let templateClone = template.cloneNode(true); // Deep copy
            templateClone.querySelector('.item__name').innerHTML = items[i].name;
            // And so on for all other properties...
            itemsList.appendChild(templateClone);
        }

        setTimeout(refreshItemsEverySecond, 1000);
    }

    refreshItemsEverySecond();
});

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
        Ajax.get(Urls.ADMIN_DASHBOARD_ITEMS, /* options */).then((response) => {
            // Display elements
        });
    }

    function loadAndDisplayItems() {
        Ajax.get(Urls.ADMIN_DASHBOARD_ORDERS, /* options */).then((response) => {
            // Display elements
        });
    }
})();
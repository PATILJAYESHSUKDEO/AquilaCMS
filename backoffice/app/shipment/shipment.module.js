var currModule = {name: "shipment"};

angular.module('aq.' + currModule.name, [
    'aq.' + currModule.name + '.controllers',
    'aq.' + currModule.name + '.routes',
    'aq.' + currModule.name + '.services',
    'aq.' + currModule.name + '.filters'
]);
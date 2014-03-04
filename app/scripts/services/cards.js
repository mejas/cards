(function(angular) {
    'use strict';

    var cardsApp = angular.module('cardsApp');

    cardsApp.factory('Cards', function($resource, AppSettings) {
        var cardsResource = $resource(AppSettings.serviceBaseUrl + 'cards');
        var cardResource = $resource(AppSettings.serviceBaseUrl + 'cards/:id', null, {
            'update': { method: 'PUT' }
        });

        return {
            getAll: function() {
                return cardsResource.query(); 
            },
            add: function(card) {
                return cardsResource.save(card);
            },
            get: function(cardId) {
                return cardResource.get({id: cardId});
            }, 
            edit: function(cardId, card) {
                return cardResource.update({id: cardId}, card); 
            },
        };
    });
})(angular);


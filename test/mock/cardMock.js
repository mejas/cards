(function(angular) {
    var cardMock = angular.module('cardMock', []);

    cardMock.value('cardData', {
        areaId: 1,
        id: 1,
        name: 'create todo',
        description: 'description goes here',
        assignedTo: 'me@cards.com',
        labels: ['bug']
    });
})(angular);

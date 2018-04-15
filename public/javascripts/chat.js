var app = angular.module('chatApp', ['ngMaterial']);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('purple')
        .accentPalette('pink');
});

app.controller('chatController', function ($scope) {
    $scope.messages = [
        {
            'sender': 'USER',
            'text': 'hello'
         },
        {

            'sender': 'BOT',
            'text': 'hiiiiii'
         },
        {

            'sender': 'USER',
            'text': 'ssssuuuppp'
         },
        {

            'sender': 'BOT',
            'text': '!!!!!!!!!!'
         }
	];

});
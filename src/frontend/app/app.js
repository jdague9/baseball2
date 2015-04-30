/**
 * Created by jordan on 4/30/15.
 */
'use strict';

(function() {
    var app = angular.module('app', ['ngRoute', 'ngGrid', 'restangular']);
    app.config(['$routeProvider',
        function($routeProvider) {
// This makes app/keywords/KeywordsController.js handle the http://localhost:8080/#/ URL
            $routeProvider.
                when('/pickTeams', {
                    templateUrl: 'app/gameSetup/partials/pickTeams.html',
                    controller: 'PickTeamsController'
                });
        }]);
})();
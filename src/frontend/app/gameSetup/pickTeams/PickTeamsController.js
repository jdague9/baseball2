/**
 * Created by jordan on 4/30/15.
 */
'use strict';

(function() {

    var app = angular.module('app');

    app.controller('KeywordsController', function($scope, RepositoryFactory, resolveEntity) {

        /* == Frontend Initialization == */

        /* All of this happens as soon as the page loads */

        /* resolveEntity is a helper function which is used in partials/keywordCategoryGridCell.html
         in order to display the name of a keyword category based on its id */

        $scope.resolveEntity = resolveEntity;

        $scope.lineup = [];

        /* A repository is the connection between this controller and the REST Api.
         We use one for hitters... */

        var HittersRepository = new RepositoryFactory({
            endpoint: 'hitters',
            retrieveItems: function (data) {
                return data._items;
            }
        });

        /* ...and one for pitchers */

        var PitchersRepository = new RepositoryFactory({
            endpoint: 'pitchers',
            retrieveItems: function(data) {
                return data._items;
            }
        });

        var TeamsRepository = new RepositoryFactory({
            endpoint: 'teams',
            retrieveItems: function(data) {
                return data._items;
            }
        });

        /* When the frontend loads, we want the controller to immediately
         load all keyword categories and categories from the API */

        HittersRepository.readAll().then(function(hitters) {
            $scope.hitters = hitters;
            PitchersRepository.readAll().then(function(pitchers) {
                $scope.pitchers = pitchers;
            });
        });

        /* The grid. This part is best coded while listening to the Tron: Legacy soundtrack. */

        $scope.keywordsGridOptions = {
            data: 'hitters', // This makes the grid use the data in $scope.keywords
            enableCellSelection: false, // breaks edit of cells with select element if true
            enableCellEdit: false,
            keepLastSelected: false,
            enableRowSelection: false,
            multiSelect: false,
            enableSorting: true,
            enableColumnResize: true,
            enableColumnReordering: true,
            showFilter: true,
            rowHeight: '40',
            columnDefs: [
                {
                    field: 'first_name',
                    displayName: 'First Name',
                    enableCellEdit: false,
                    width: '80px'
                },
                {
                    field: 'last_name',
                    displayName: 'Last Name'
                },
                {
                    /* The keyword category field does not use the build-in cell template, but our own */
                    field: 'uni_number',
                    displayName: '#'
                    //cellTemplate: 'app/keywords/partials/keywordCategoryGridCell.html',
                    //editableCellTemplate: 'app/keywords/partials/keywordCategoryGridCellEditor.html'
                },
                {
                    field: '',
                    displayName: 'Positions'
                },
                {
                    /* Same goes for the operations column */
                    field: 'bats',
                    displayName: 'Bats',
                    //cellTemplate: 'app/keywords/partials/operationsGridCell.html',
                    //enableCellEdit: false,
                    sortable: false
                },
                {
                    field: 'throws',
                    displayName: 'Throws'
                },
                {
                    field: '',
                    displayName: 'Add to Lineup',
                    cellTemplate: 'app/gameSetup/partials/addToLineup.html'
                }

            ]
        };

        /* == Frontend Operations == */
        /* These functions are called when the frontend is operated, e.g., if a butt\
         on is clicked */

        $scope.addHitterToLineup = function(hitterid) {
            $scope.$broadcast('ngGridEventEndHitterLineupAdd');
            $scope.lineup.append($scope.hitters.filter(function(hitter) {
                return hitterid === hitter.hitterid;
            })[0]);
        };

        $scope.updateKeyword = function(keyword) {
            $scope.$broadcast('ngGridEventEndCellEdit');
            KeywordsRepository.updateOne(keyword);
        };

        $scope.deleteKeyword = function(keyword) {
            $scope.$broadcast('ngGridEventEndCellEdit');
            KeywordsRepository.deleteOne(keyword).then(function() {
                KeywordsRepository.readAll().then(function(keywords) {
                    $scope.keywords = keywords;
                });
            });
        };
        /* These are here to make the grid behave cleanly in regards to the keyword \
         category select */
        $scope.stopEditingKeywordCategory = function() {
            $scope.$broadcast('ngGridEventEndCellEdit');
        };

        $scope.$on('ngGridEventRows', function(newRows) {
            $scope.$broadcast('ngGridEventEndCellEdit');
        });

    });

})();
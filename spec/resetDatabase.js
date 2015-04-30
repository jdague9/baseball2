/**
 * Created by jordan on 4/27/15.
 */
'use strict';

var async = require('async');

var resetDatabase = function(dbSession, callback) {
    async.series(
        [
            function(callback) {
                dbSession.remove('hitters', '1', function(err){
                    callback(err)
                });
            },
            function(callback) {
                dbSession.remove('pitchers', '1', function(err){
                    callback(err)
                });
            },
            function(callback) {
                dbSession.remove('hitter_positions', '1', function(err){
                    callback(err)
                });
            },
            function(callback) {
                dbSession.remove('pitcher_positions', '1', function(err) {
                    callback(err)
                });
            },
            function(callback) {
                dbSession.remove('teams', '1', function(err) {
                    callback(err)
                });
            },
            function(callback) {
                dbSession.remove('team_hitter_map', '1', function(err){
                    callback(err)
                });
            },
            function(callback) {
                dbSession.remove('team_pitcher_map', '1', function(err) {
                    callback(err)
                });
            }

        ],
        function (err, results) {
            callback(err);
        }
    );
};

module.exports = resetDatabase;
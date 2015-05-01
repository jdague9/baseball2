/**
 * Created by jordan on 4/30/15.
 */
'use strict';

var Percolator = require('percolator').Percolator;
var dbSession = require('../../src/backend/dbSession');

var Server = function(port) {
    var server = Percolator({'port': port, 'autoLink': false, 'staticDir': __dirname + '/../frontend'});

    server.route('/api/hitters',
        {
            GET: function (req, res) {
                dbSession.fetchAll('SELECT hitterid, last_name, first_name, team, year, uni_number, grade_letter, ' +
                    'grade_number, bats, throws, base_running, sb_chance, sb_opp, sh_chance, arm, ar, range, ' +
                    'error_chance, injury_num, injury_letter, outcomes FROM hitters ORDER BY hitterid',
                    function(err, rows) {
                        if(err) {
                            console.log(err);
                            res.status.internalServerError(err);
                        } else {
                            res.collection(rows).send();
                        }
                    });
            }
        }
    );
    server.route('/api/pitchers',
        {
            GET: function (req, res) {
                dbSession.fetchAll('SELECT pitcherid, last_name, first_name, team, year, uni_number, bats, throws, ' +
                    'base_running, sb_chance, sb_opp, sh_chance, range, error_chance, injury_num, injury_letter, grade, ' +
                    'mip, bk, wp, outcomes FROM pitchers ORDER BY pitcherid',
                    function(err, rows) {
                        if(err) {
                            console.log(err);
                            res.status.internalServerError(err);
                        } else {
                            res.collection(rows).send();
                        }
                    });
            }
        }
    );
    server.route('/api/teams',
        {
            GET: function (req, res) {
                dbSession.fetchAll('SELECT teamid, city_name, mascot, abbr, permanently_rem  FROM teams ORDER BY teamid',
                    function(err, rows) {
                        if(err) {
                            console.log(err);
                            res.status.internalServerError(err);
                        } else {
                            res.collection(rows).send();
                        }
                    });
            }
        }
    );
    return server;
};

module.exports = {'Server': Server};
/**
 * Created by jordan on 4/27/15.
 */
'use strict';
var Percolator = require('percolator').Percolator;
var dbSession = require('../../src/backend/dbSession.js');
var port = 8080;
var server = Percolator({'port': port, 'autoLink': false});
server.route('/api/hitters',
    {
        GET: function (req, res) {
            dbSession.fetchAll('SELECT hitterid, last_name, first_name, team, year, uni_number, grade_letter, grade_number, bats, throws, base_running, sb_chance, sb_opp, sh_chance, arm, ar, range, error_chance, injury_num, injury_letter, outcomes FROM hitters ORDER BY hitterid',
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
            dbSession.fetchAll()
        }
    })
server.listen(function() {
    console.log('Server started and listening on port', port);
});
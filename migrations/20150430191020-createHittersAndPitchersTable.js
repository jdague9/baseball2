'use strict';

var dbm = require('db-migrate');
var type = dbm.dataType;
var async = require('async');

exports.up = function(db, callback) {
    async.series(
        [
            db.createTable.bind(db, 'hitters', {
                hitterid: {type: 'int', primaryKey: true, autoIncrement: true, notNull: true},
                last_name: {type: 'string', length: '128', notNull: true},
                first_name: {type: 'string', length: '128', notNull: true},
                team: {type: 'int', length: '128'},
                year: {type: 'int'},
                uni_number: {type: 'int'},
                grade_letter: {type: 'text'},
                grade_number: {type: 'int'},
                bats: {type: 'text'},
                throws: {type: 'text'},
                base_running: {type: 'text'},
                sb_chance: {type: 'int'},
                sb_opp: {type: 'text'},
                sh_chance: {type: 'int'},
                arm: {type: 'text'},
                ar: {type: 'int'},
                range: {type: 'text'},
                error_chance: {type: 'int'},
                injury_num: {type: 'int'},
                injury_letter: {type: 'text'},
                outcomes: {type: 'text'}
            }),
            db.createTable.bind(db, 'pitchers', {
                pitcherid: {type: 'int', primaryKey: true, autoIncrement: true, notNull: true},
                last_name: {type: 'string', length: '128', notNull: true},
                first_name: {type: 'string', length: '128', notNull: true},
                team: {type: 'int', length: '128'},
                year: {type: 'int'},
                uni_number: {type: 'int'},
                bats: {type: 'text'},
                throws: {type: 'text'},
                base_running: {type: 'text'},
                sb_chance: {type: 'int'},
                sb_opp: {type: 'text'},
                sh_chance: {type: 'int'},
                range: {type: 'text'},
                error_chance: {type: 'int'},
                injury_num: {type: 'int'},
                injury_letter: {type: 'text'},
                grade: {type: 'text'},
                mip: {type: 'int'},
                bk: {type: 'wp'},
                wp: {type: 'wp'},
                outcomes: {type: 'text'}
            }),
            db.createTable.bind(db, 'teams', {
                teamid: {type: 'int', primaryKey: true, autoIncrement: true, notNull: true},
                city_name: {type: 'text', length: '128'},
                mascot: {type: 'text', length: '128'},
                abbr: {type: 'text'},
                permanently_rem: {type: 'int', defaultValue: 0}
            }),
            db.createTable.bind(db, 'hitter_positions', {
                hitter_id: {type: 'int', notNull: true, foreignKey: {
                    name: 'hitter_positions_hitter_id_fk',
                    table: 'hitters',
                    mapping: 'hitterid'
                }},
                position: {type: 'int', notNull: true}
            }),
            db.createTable.bind(db, 'pitcher_positions', {
                pitcher_id: {type: 'int', notNull: true, foreignKey: {
                    name: 'pitcher_positions_pitcher_id_fk',
                    table: 'pitchers',
                    mapping: 'pitcherid'
                }},
                position: {type: 'text', notNull: true}
            }),
            db.createTable.bind(db, 'team_hitter_map', {
                team_id: {type: 'int', notNull: true, foreignKey: {
                    name: 'team_hitter_map_team_id_fk',
                    table: 'teams',
                    mapping: 'teamid'
                }},
                hitter_id: {type: 'int', notNull: true, foreignKey: {
                    name: 'team_hitter_map_hitter_id_fk',
                    table: 'hitters',
                    mapping: 'hitterid'
                }}
            }),
            db.createTable.bind(db, 'team_pitcher_map', {
                team_id: {type: 'int', notNull: true, foreignKey: {
                    name: 'team_pitcher_map_team_id_fk',
                    table: 'teams',
                    mapping: 'teamid'
                }},
                hitter_id: {type: 'int', notNull: true, foreignKey: {
                    name: 'team_pitcher_map_pitcher_id_fk',
                    table: 'pitchers',
                    mapping: 'pitcherid'
                }}
            })

        ], callback);
};

exports.down = function(db, callback) {
    async.series(
        [
            db.dropTable.bind(db, 'hitters'),
            db.dropTable.bind(db, 'pitchers'),
            db.dropTable.bind(db, 'teams'),
            db.dropTable.bind(db, 'hitter_positions'),
            db.dropTable.bind(db, 'pitcher_positions'),
            db.dropTable.bind(db, 'team_hitter_map'),
            db.dropTable.bind(db, 'team_pitcher_map')
        ], callback);
};

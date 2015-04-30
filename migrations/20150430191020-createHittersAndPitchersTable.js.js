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
            })
        ], callback);
};

exports.down = function(db, callback) {
    async.series(
        [
            db.dropTable.bind(db, 'hitters'),
            db.dropTable.bind(db, 'pitchers')
        ], callback);
};

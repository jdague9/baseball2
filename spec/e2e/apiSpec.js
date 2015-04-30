/**
 * Created by jordan on 4/27/15.
 */
'use strict';

var request = require('request');
var dbSession = require('../../src/backend/dbSession.js');
var resetDatabase = require('../resetDatabase.js');
var async = require('async');

describe('The API', function() {
    it('should respond to a GET request at /api/hitters/', function(done) {
        var outcomes1 = {
            "r": {
                "hr": 5,
                "3b": 0,
                "2b": 6,
                "1b": 14,
                "bb": 10,
                "hbp": 2,
                "roe_po": 0,
                "so": 23,
                "g3": 2,
                "g4": 5,
                "g1": 1,
                "g6": 5,
                "g5": 5,
                "f9": 3,
                "f8": 8,
                "f7": 8,
                "l3": 0,
                "l4": 0,
                "l6": 0,
                "l5": 1,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "l": {
                "hr": 8,
                "3b": 0,
                "2b": 9,
                "1b": 12,
                "bb": 11,
                "hbp": 0,
                "roe_po": 2,
                "so": 12,
                "g3": 4,
                "g4": 4,
                "g1": 1,
                "g6": 6,
                "g5": 5,
                "f9": 4,
                "f8": 10,
                "f7": 9,
                "l3": 0,
                "l4": 0,
                "l6": 1,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "risp": {
                "hr": 6,
                "3b": 0,
                "2b": 4,
                "1b": 18,
                "bb": 11,
                "hbp": 0,
                "roe_po": 3,
                "so": 21,
                "g3": 2,
                "g4": 3,
                "g1": 1,
                "g6": 5,
                "g5": 4,
                "f9": 3,
                "f8": 8,
                "f7": 8,
                "l3": 0,
                "l4": 0,
                "l6": 0,
                "l5": 1,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            }
        };
        var outcomes2 = {
            "r": {
                "hr": 1,
                "3b": 0,
                "2b": 5,
                "1b": 15,
                "bb": 7,
                "hbp": 2,
                "roe_po": 0,
                "so": 19,
                "g3": 5,
                "g4": 7,
                "g1": 1,
                "g6": 6,
                "g5": 3,
                "f9": 10,
                "f8": 11,
                "f7": 5,
                "l3": 0,
                "l4": 0,
                "l6": 0,
                "l5": 1,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "l": {
                "hr": 5,
                "3b": 0,
                "2b": 2,
                "1b": 9,
                "bb": 6,
                "hbp": 0,
                "roe_po": 2,
                "so": 35,
                "g3": 6,
                "g4": 6,
                "g1": 1,
                "g6": 3,
                "g5": 2,
                "f9": 7,
                "f8": 9,
                "f7": 4,
                "l3": 0,
                "l4": 0,
                "l6": 1,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "risp": {
                "hr": 4,
                "3b": 1,
                "2b": 6,
                "1b": 13,
                "bb": 13,
                "hbp": 3,
                "roe_po": 0,
                "so": 14,
                "g3": 5,
                "g4": 7,
                "g1": 1,
                "g6": 5,
                "g5": 4,
                "f9": 7,
                "f8": 8,
                "f7": 6,
                "l3": 0,
                "l4": 0,
                "l6": 0,
                "l5": 1,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            }
        };
        var outcomes3 = {
            "r": {
                "hr": 3,
                "3b": 0,
                "2b": 3,
                "1b": 17,
                "bb": 4,
                "hbp": 0,
                "roe_po": 1,
                "so": 27,
                "g3": 3,
                "g4": 4,
                "g1": 1,
                "g6": 6,
                "g5": 5,
                "f9": 4,
                "f8": 10,
                "f7": 9,
                "l3": 0,
                "l4": 0,
                "l6": 0,
                "l5": 1,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "l": {
                "hr": 0,
                "3b": 0,
                "2b": 3,
                "1b": 18,
                "bb": 8,
                "hbp": 0,
                "roe_po": 0,
                "so": 24,
                "g3": 3,
                "g4": 6,
                "g1": 1,
                "g6": 7,
                "g5": 6,
                "f9": 4,
                "f8": 9,
                "f7": 8,
                "l3": 0,
                "l4": 0,
                "l6": 1,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "risp": {
                "hr": 4,
                "3b": 0,
                "2b": 2,
                "1b": 15,
                "bb": 6,
                "hbp": 0,
                "roe_po": 0,
                "so": 23,
                "g3": 4,
                "g4": 5,
                "g1": 1,
                "g6": 7,
                "g5": 6,
                "f9": 5,
                "f8": 10,
                "f7": 9,
                "l3": 0,
                "l4": 0,
                "l6": 0,
                "l5": 1,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            }
        };
        var expected = {
            "_items": [
                {
                    "hitterid": 1,
                    "last_name": "Pearce",
                    "first_name": "Steve",
                    "team": "BAL",
                    "year": 2014,
                    "uni_number": 28,
                    "grade_letter": "a",
                    "grade_number": 49,
                    "bats": "r",
                    "throws": "r",
                    "base_running": "m",
                    "sb_chance": 89,
                    "sb_opp": "d",
                    "sh_chance": 89,
                    "arm": "a",
                    "ar": null,
                    "range": "neu",
                    "error_chance": 4,
                    "injury_num": 54,
                    "injury_letter": "d",
                    //"positions": [3, 7, 9],
                    "outcomes": JSON.stringify(outcomes1)
                },
                {
                    "hitterid": 2,
                    "last_name": "Flaherty",
                    "first_name": "Ryan",
                    "team": "BAL",
                    "year": 2014,
                    "uni_number": 3,
                    "grade_letter": "d",
                    "grade_number": 31,
                    "bats": "l",
                    "throws": "r",
                    "base_running": "m",
                    "sb_chance": 89,
                    "sb_opp": "e",
                    "sh_chance": 53,
                    "arm": "a",
                    "ar": null,
                    "range": "neg",
                    "error_chance": 8,
                    "injury_num": 54,
                    "injury_letter": "d",
                    //"positions": [5, 4, 6, 3, 7, 9],
                    "outcomes": JSON.stringify(outcomes2)
                },
                {
                    "hitterid": 3,
                    "last_name": "Hundley",
                    "first_name": "Nick",
                    "team": "BAL",
                    "year": 2014,
                    "uni_number": 40,
                    "grade_letter": "d",
                    "grade_number": 30,
                    "bats": "r",
                    "throws": "r",
                    "base_running": "m",
                    "sb_chance": 89,
                    "sb_opp": "e",
                    "sh_chance": 57,
                    "arm": null,
                    "ar": 10,
                    "range": "neu",
                    "error_chance": 5,
                    "injury_num": 83,
                    "injury_letter": "e",
                    //"positions": [2],
                    "outcomes": JSON.stringify(outcomes3)
                }
            ]
        };

        async.series(
            [
                function (callback) {
                    resetDatabase(dbSession, callback);
                },
                function (callback) {
                    dbSession.insert(
                        'hitters',
                        {
                            "last_name": "Pearce",
                            "first_name": "Steve",
                            "team": "BAL",
                            "year": 2014,
                            "uni_number": 28,
                            "grade_letter": "a",
                            "grade_number": 49,
                            "bats": "r",
                            "throws": "r",
                            "base_running": "m",
                            "sb_chance": 89,
                            "sb_opp": "d",
                            "sh_chance": 89,
                            "arm": "a",
                            "ar": null,
                            "range": "neu",
                            "error_chance": 4,
                            "injury_num": 54,
                            "injury_letter": "d",
                            "outcomes": JSON.stringify(outcomes1)
                        },
                        function (err) {
                            callback(err)
                        });
                },
                function (callback) {
                    dbSession.insert(
                        'hitters',
                        {
                            "last_name": "Flaherty",
                            "first_name": "Ryan",
                            "team": "BAL",
                            "year": 2014,
                            "uni_number": 3,
                            "grade_letter": "d",
                            "grade_number": 31,
                            "bats": "l",
                            "throws": "r",
                            "base_running": "m",
                            "sb_chance": 89,
                            "sb_opp": "e",
                            "sh_chance": 53,
                            "arm": "a",
                            "ar": null,
                            "range": "neg",
                            "error_chance": 8,
                            "injury_num": 54,
                            "injury_letter": "d",
                            //"positions": [5, 4, 6, 3, 7, 9],
                            "outcomes": JSON.stringify(outcomes2)
                        },
                        function (err) {
                            callback(err)
                        });
                },
                function (callback) {
                    dbSession.insert(
                        'hitters',
                        {
                            "last_name": "Hundley",
                            "first_name": "Nick",
                            "team": "BAL",
                            "year": 2014,
                            "uni_number": 40,
                            "grade_letter": "d",
                            "grade_number": 30,
                            "bats": "r",
                            "throws": "r",
                            "base_running": "m",
                            "sb_chance": 89,
                            "sb_opp": "e",
                            "sh_chance": 57,
                            "arm": null,
                            "ar": 10,
                            "range": "neu",
                            "error_chance": 5,
                            "injury_num": 83,
                            "injury_letter": "e",
                            //"positions": [2],
                            "outcomes": JSON.stringify(outcomes3)
                        },
                        function (err) {
                            callback(err)
                        });
                }
            ],
            function (err, results) {
                request.get(
                    {
                        'url': 'http://localhost:8080/api/hitters/',
                        'json': true
                    },
                    function (err, res, body) {
                        expect(res.statusCode).toBe(200);
                        expect(body).toEqual(expected);
                        done();
                    }
                );
            }
        );
    });

    it('should respond to a GET request at /api/pitchers/', function(done) {
        var outcomes1 = {
            "r": {
                "hr": 0,
                "3b": 0,
                "2b": 0,
                "1b": 4,
                "bb": 1,
                "hbp": 0,
                "roe_po": 0,
                "so": 43,
                "g3": 5,
                "g4": 4,
                "g1": 2,
                "g6": 8,
                "g5": 6,
                "f9": 4,
                "f8": 10,
                "f7": 10,
                "l3": 1,
                "l4": 0,
                "l6": 0,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "l": {
                "hr": 0,
                "3b": 0,
                "2b": 0,
                "1b": 4,
                "bb": 1,
                "hbp": 0,
                "roe_po": 0,
                "so": 43,
                "g3": 5,
                "g4": 4,
                "g1": 2,
                "g6": 8,
                "g5": 6,
                "f9": 4,
                "f8": 10,
                "f7": 10,
                "l3": 1,
                "l4": 0,
                "l6": 0,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "risp": {
                "hr": 0,
                "3b": 0,
                "2b": 0,
                "1b": 4,
                "bb": 1,
                "hbp": 0,
                "roe_po": 0,
                "so": 43,
                "g3": 5,
                "g4": 4,
                "g1": 2,
                "g6": 8,
                "g5": 6,
                "f9": 4,
                "f8": 10,
                "f7": 10,
                "l3": 1,
                "l4": 0,
                "l6": 0,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            }
        };
        var outcomes2 = {
            "r": {
                "hr": 0,
                "3b": 0,
                "2b": 0,
                "1b": 5,
                "bb": 1,
                "hbp": 0,
                "roe_po": 0,
                "so": 42,
                "g3": 5,
                "g4": 4,
                "g1": 2,
                "g6": 8,
                "g5": 6,
                "f9": 4,
                "f8": 10,
                "f7": 10,
                "l3": 0,
                "l4": 0,
                "l6": 1,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "l": {
                "hr": 0,
                "3b": 0,
                "2b": 0,
                "1b": 5,
                "bb": 1,
                "hbp": 0,
                "roe_po": 0,
                "so": 42,
                "g3": 5,
                "g4": 4,
                "g1": 2,
                "g6": 8,
                "g5": 6,
                "f9": 4,
                "f8": 10,
                "f7": 10,
                "l3": 0,
                "l4": 0,
                "l6": 1,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            },
            "risp": {
                "hr": 0,
                "3b": 0,
                "2b": 0,
                "1b": 5,
                "bb": 1,
                "hbp": 0,
                "roe_po": 0,
                "so": 42,
                "g3": 5,
                "g4": 4,
                "g1": 2,
                "g6": 8,
                "g5": 6,
                "f9": 4,
                "f8": 10,
                "f7": 10,
                "l3": 0,
                "l4": 0,
                "l6": 1,
                "l5": 0,
                "l1": 0,
                "roe_lo": 1,
                "bk_wp": 1
            }
        };
        var expected = {
            "_items": [
                {
                    "pitcherid": 1,
                    "last_name": "McFarland",
                    "first_name": "T.J.",
                    "team": "BAL",
                    "year": 2014,
                    "uni_number": 66,
                    "bats": "l",
                    "throws": "l",
                    "base_running": "s",
                    "sb_chance": 0,
                    "sb_opp": "n",
                    "sh_chance": 89,
                    "range": "pos",
                    "error_chance": 8,
                    "injury_num": 16,
                    "injury_letter": "c",
                    "positions": [12],
                    "grade": {
                        "away": ['b', null],
                        "home": ['b', null]
                    },
                    "mip": 3,
                    "bk": 0,
                    "wp": 0,
                    "outcomes": JSON.stringify(outcomes1)
                },
                {
                    "pitcherid": 2,
                    "last_name": "Tillman",
                    "first_name": "Chris",
                    "team": "BAL",
                    "year": 2014,
                    "uni_number": 30,
                    "bats": "r",
                    "throws": "r",
                    "base_running": "s",
                    "sb_chance": 0,
                    "sb_opp": "n",
                    "sh_chance": 89,
                    "range": "neg",
                    "error_chance": 7,
                    "injury_num": null,
                    "injury_letter": "n",
                    "positions": [11],
                    "grade": {
                        "away": ['c', 'b'],
                        "home": ['a', 'aa']
                    },
                    "mip": 6,
                    "bk": 0,
                    "wp": 100,
                    "outcomes": JSON.stringify(outcomes2)
                }
            ]
        };
        async.series(
            [
                function (callback) {
                    resetDatabase(dbSession, callback);
                },
                function (callback) {
                    dbSession.insert(
                        'pitchers',
                        {
                            "last_name": "McFarland",
                            "first_name": "T.J.",
                            "team": "BAL",
                            "year": 2014,
                            "uni_number": 66,
                            "bats": "l",
                            "throws": "l",
                            "base_running": "s",
                            "sb_chance": 0,
                            "sb_opp": "n",
                            "sh_chance": 89,
                            "range": "pos",
                            "error_chance": 8,
                            "injury_num": 16,
                            "injury_letter": "c",
                            "positions": [12],
                            "grade": {
                                "away": ['b', null],
                                "home": ['b', null]
                            },
                            "mip": 3,
                            "bk": 0,
                            "wp": 0,
                            "outcomes": JSON.stringify(outcomes1)
                        },
                        function (err) {
                            callback(err)
                        });
                },
                function (callback) {
                    dbSession.insert(
                        'pitchers',
                        {
                            "last_name": "Tillman",
                            "first_name": "Chris",
                            "team": "BAL",
                            "year": 2014,
                            "uni_number": 30,
                            "bats": "r",
                            "throws": "r",
                            "base_running": "s",
                            "sb_chance": 0,
                            "sb_opp": "n",
                            "sh_chance": 89,
                            "range": "neg",
                            "error_chance": 7,
                            "injury_num": null,
                            "injury_letter": "n",
                            "positions": [11],
                            "grade": {
                                "away": ['c', 'b'],
                                "home": ['a', 'aa']
                            },
                            "mip": 6,
                            "bk": 0,
                            "wp": 100,
                            "outcomes": JSON.stringify(outcomes2)
                        },
                        function (err) {
                            callback(err)
                        });
                }
            ],
            function (err, results) {
                request.get(
                    {
                        'url': 'http://localhost:8080/api/pitchers/',
                        'json': true
                    },
                    function (err, res, body) {
                        expect(res.statusCode).toBe(200);
                        expect(body).toEqual(expected);
                        done();
                    }
                );
            }
        );
    });
});
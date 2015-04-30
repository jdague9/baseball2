/**
 * Created by jordan on 4/27/15.
 */
'use strict';

var DBWrapper = require('node-dbi').DBWrapper;

var dbWrapper = new DBWrapper('sqlite3', {'path': '/var/tmp/baseball2.test.sqlite'});
dbWrapper.connect();

module.exports = dbWrapper;
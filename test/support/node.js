"use strict";

var Q = require('q');
var chai = require("chai");
var chaiAsPromised = require("../..");
var R = require('ramda');
var Headquarters = require('../../lib/headquarters-node');

chai.use(chaiAsPromised);
chai.should();

chaiAsPromised.transferPromiseness = function(assertion, promise) {
  assertion.then = promise.then.bind(promise); // this is all you get by default
  assertion.finally = promise.finally.bind(promise);
  assertion.done = promise.done.bind(promise);
};

global.Headquarters = Headquarters;
global.R = R;
global.chaiAsPromised = chaiAsPromised;
global.expect = chai.expect;

"use strict";

var Q = require("q");
var R = require("ramda");

var settings, token, HQOauth;

function parseUserOptions(options) {
  return {
    clientID: options.clientID,
    clientSecret: options.clientSecret,
    callbackURL: options.callbackURL
  };
}

function saveAccessToken(newToken) {
  token = newToken;
}

function accessToken() {
  return token;
}

function initialize(options) {
  settings = parseUserOptions(options);
  HQOauth = require("./hq_oauth")(settings);
}

function redirectURL() {
  return HQOauth.redirectURL();
}

function setCode(code) {
  return HQOauth.setCode(code);
}

module.exports = {
  initialize: initialize,
  accessToken: accessToken,
  redirectURL: redirectURL,
  setCode: R.pPipe(setCode, R.tap(saveAccessToken)) };
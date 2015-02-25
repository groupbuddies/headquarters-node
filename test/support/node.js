'use strict';

var Q = require('q');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var R = require('ramda');
var Headquarters = require('../../dist/headquarters-node');
var Constants = require('../../dist/constants');
var Settings = require('../../settings.json');

Settings.redirectURL = generateRedirectURL();
chai.should();
chai.use(chaiAsPromised);

global.Settings = Settings;
global.Headquarters = Headquarters;
global.R = R;
global.expect = chai.expect;

function generateRedirectURL() {
  var template = 'HOST/oauth/authorize?'
      + 'redirect_uri=CALLBACK&response_type=code&client_id=CLIENT';

  return template
    .replace('HOST', Constants.APIBaseURL)
    .replace('CALLBACK', encodeURIComponent(Settings.callbackURL))
    .replace('CLIENT', Settings.clientID);
}


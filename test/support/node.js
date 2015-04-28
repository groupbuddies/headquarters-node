'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var R = require('ramda');
var Headquarters = require('../../dist/headquarters-node');
var Constants = require('../../dist/constants');
var Settings = require('../../settings.json');

var redirectURL = redirectURLForSettings(Settings.authorizationCode);
Settings.authorizationCode.redirectURL =  redirectURL;

chai.should();
chai.use(chaiAsPromised);

global.Settings = Settings;
global.Headquarters = Headquarters;
global.R = R;
global.expect = chai.expect;

function redirectURLForSettings(settings) {
  var template = Constants.APITokenURL +
    '?redirect_uri=CALLBACK&response_type=code&client_id=CLIENT';

  return template
    .replace('HOST', Constants.APIBaseURL)
    .replace('CALLBACK', encodeURIComponent(settings.callbackURL))
    .replace('CLIENT', settings.clientID);
}


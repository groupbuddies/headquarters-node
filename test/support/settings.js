var apiBase = 'http://hq.groupbuddies.com/admin';
var clientId = 'client_id';
var clientSecret = 'client_secret';
var callbackURL = 'http://example.groupbuddies.com/callback';


function generateRedirectURL(apiBase, callbackURL, clientId) {
  var template = "HOST/oauth/authorize?redirect_uri=CALLBACK&response_type=code&client_id=CLIENT";
  return template
    .replace("HOST", apiBase)
    .replace("CALLBACK", encodeURIComponent(callbackURL))
    .replace("CLIENT", clientId);
}

global.apiBase = apiBase;
global.clientId = clientId;
global.clientSecret = clientSecret;
global.callbackURL = callbackURL;
global.redirectURL = generateRedirectURL(apiBase, callbackURL, clientId);

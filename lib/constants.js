let APIBaseURL = 'https://hq.groupbuddies.com';
let APIMembersPath = '/members';
let APIEmailPath = '/emails';
let APITokenPath =  '/oauth/authorize';

let Constants = {
  APIBaseURL: APIBaseURL,
  APITokenPath: APITokenPath,
  APITokenURL: APIBaseURL + APITokenPath,
  APIMembersPath: APIMembersPath,
  APIMembersURL: APIBaseURL + APIMembersPath,
  APIEmailPath: APIEmailPath,
  APIEmailURL: APIBaseURL + APIEmailPath
};

module.exports = Constants;

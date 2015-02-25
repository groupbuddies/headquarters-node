Headquarters-node
================

[![Build Status](https://semaphoreapp.com/api/v1/projects/f70c710e-d453-4c9e-bdf2-665718bef386/358218/shields_badge.svg)](https://semaphoreapp.com/groupbuddies/headquarters-node)

Node wrapper for the [headquarters API](https://github.com/groupbuddies/headquarters).

## Installation

Add headquarters-node to your dependencies:

```
npm install headquarters-node --save
```

Then require and instantiate it with the `clientID` `clientSecret` and `callbackURL` (you need to have an application registered on the [headquarters](https://hq.groupbuddies.com/admin) first):

```js
var Headquarters = require('headquarters-node');

var credentials = {
  clientID: "dummy_client_id",
  clientSecret: "dummy_client_secret",
  callbackURL: "https://example.groupbuddies.com/callback"
};

var headquarters = Headquarters(credentials);
```

### Authorization

Once you have an instance of the headquarters-node you need to have you'r users authorize the requests you make. First, they need to be redirect to an authorization page. To generate the redirect url call the `redirectURL` method:

```js
headquarters.redirectURL();
```

This method returns a promise that resolves with the url for the authorization page.

Now you need to listen on you callback endpoint (the one you setup on your application registration), the headquarters will issue a get a request from the with the oauth code. You need to call `setCode` on headquarters-node with this code.

```js
headquarters.setCode(code)
```

This method returns a promise when finished. After that you can start making requests to the headquarters.

## Members

### all

To retrieve a collection of all members of the team you might use the `all`
method:

```js
return headquarters.member.all();
```

This returns a promise that resolves an array of members.

### search

To search members of the team you might use the `search`
method:

```js
return headquarters.member.search('gabrielpoca@gmail.com');
```

This returns a promise that resolves an array of members.

## Contributing

To contribute you need to setup the development environment. First clone the project.

```
git clone git@github.com:groupbuddies/headquarters-node.git
```

Then install the development dependencies.

```
npm install
```

### Running

Since the headquarters-node is using ES6 it needs to run the files trough a transpiler. For that you can use the default gulp task. It will watch for changes and update the files on the dist folder every time.

```
gulp
```

### Tests

To run the tests run the following gulp task. If your making changes to your code don't forget to keep the default task running.

```
gulp test
```

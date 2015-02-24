Headquarters-node
================

[![Build Status](https://semaphoreapp.com/api/v1/projects/f70c710e-d453-4c9e-bdf2-665718bef386/358218/shields_badge.svg)](https://semaphoreapp.com/groupbuddies/headquarters-node)

Node wrapper for the [headquarters API](https://github.com/groupbuddies/headquarters).

## Setup

The first step to setup headquarters-node is to register an application on the headquarters.

To use the headquarters-node you need to require:

```js
var Headquarters = require('headquarters-node');
```

Now you can instantiate the client. You need to pass an object with the keys `clientID`, `clientSecret` and `callbackURL`:

```js
var credentials = {
  clientID: "dummy_client_id",
  clientSecret: "dummy_client_secret",
  callbackURL: "https://example.groupbuddies.com/callback"
};

var headquarters = Headquarters(credentials);
```

Once you have this instance you need to first setup redirect you users. To generate the redirect url call the `redirectURL` method:

```js
headquarters.redirectURL();
```

This method returns a promise that resolves with the url for you to redirect your users.

Now you need to listen on you callback endpoint, you'll get a request from the server with the oauth code. You need to call `setCode` on headquarters-node.

```js
headquarters.setCode(req.query.code)
```

This method returns a promise when finished. After that you can start making requests to the headquarters.

## Members

### all

To retrieve a collection of all members of the team you might use the `all`
method:

```js
return headquarters.Member.all();
```

This returns a promise that resolves an array of members.

### search

To search members of the team you might use the `search`
method:

```js
return headquarters.Member.search('gabrielpoca@gmail.com');
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

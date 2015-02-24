Headquarters-node
================

Node wrapper for the [headquarters API](https://github.com/groupbuddies/headquarters).

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

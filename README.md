# Angular 2 - TypeScript, Karma, Jasmine

This is an example of running Karma with a pure TypeScript code base. By using [karma-typescript-preprocessor](https://github.com/sergeyt/karma-typescript-preprocessor), there is no need to transpile the TypeScript source files before running Karma, reserving that step for the build tasks.

## Testing
There is a single test that simply checks if a property of a new interfaced Object is correct. Although the test is simple, and only a few lines, it demonstrates that TypeScript can be used with Karma.

### To use
First install the dependencies

```bash
$ npm install
```
This will install the Typings as well as the npm modules.

Then run the tests:

```bash
$ npm test
```
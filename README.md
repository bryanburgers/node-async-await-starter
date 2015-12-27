# `async`/`await` Starter

Try out using Babel to compile code with `async`/`await` (and ES2015 module
syntax).

This does not use the `es2015` preset, because node@5 already has many of those
features already.


## Compiling

`npm run compile` will run gulp to compile from src => dist.

`npm run compile watch` will watch for changes in src and continually compile.


## Testing

`npm test` will test using mocha. The test files can also be ES2015 and use
`async`/`await`.

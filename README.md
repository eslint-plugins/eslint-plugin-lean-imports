ESLint-plugin-lean-imports
===================

[![Travis Build Status][build-badge]][build]
[![devDependency Status][dev-deps-badge]][dev-deps]

Make sure your imports only import the bits you need

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    npm install eslint

If you installed `ESLint` globally, you have to install lean-imports plugin globally too. Otherwise, install it locally.

    npm install eslint-plugin-lean-imports

The rules are specifically written to target ES6 JavaScript, so you'll want to
use the [babel-eslint](https://github.com/babel/babel-eslint) parser.

# Configuration

Add `plugins` section and specify ESLint-plugin-lean-imports as a plugin.

```json
{
  "parser": "babel-eslint",
  "plugins": [
    "lean-imports"
  ]
}
```

Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "lean-imports/import": [1, [
        "lodash",
        "react-bootstrap",
    ]]
  }
}
```

# List of supported rules

The rules prevent from importing the whole library at once.

Here are the supported libraries:

* [import](docs/rules/import.md) Prevent an array of library from being completely imported


## Contributing

PRs are welcome if you have ideas.

Just make sure your commit is prefixed by one of the following: 

- `[added]`
- `[changed]`
- `[fixed]`
- `[removed]`

For changed or removed, just make sure to add an upgrade path in the commit message.

[Ideas are welcome](https://github.com/eslint-plugins/eslint-plugin-lean-imports/issues)

# License

ESLint-plugin-lean-imports is licensed under the [MIT License](LICENSE).

[build-badge]: https://travis-ci.org/eslint-plugins/eslint-plugin-lean-imports.svg?branch=master
[build]: https://travis-ci.org/eslint-plugins/eslint-plugin-lean-imports

[dev-deps-badge]: https://david-dm.org/eslint-plugins/eslint-plugin-lean-imports/dev-status.svg
[dev-deps]: https://david-dm.org/eslint-plugins/eslint-plugin-lean-imports#info=devDependencies

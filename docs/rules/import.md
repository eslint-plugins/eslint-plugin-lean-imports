# Enforce that the an entire library is not imported

When building browser tools you want to keep the bundles as small as possible.
A lot of client side libraries offer you to take a dependency on the whole package or import modules directly (eg: lodash, react-bootstrap).

## Rule Details

The second parameter takes an array of the name of the library you want to test against (Only takes strings currently).

With the following config
```
"lean-imports": [1, ["lodash"]]
```
The following patterns are considered warnings:

```js
import _ from 'lodash';
```

```js
import { default as something } from 'lodash';
```

```js
import 'lodash';
```

The following patterns are not considered warnings:

```js
import find from 'lodash/collection/find';
```

## When Not To Use It

If you do not care that that an entire libary is imported.

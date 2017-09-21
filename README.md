# React Simple Card
[![Build Status](https://travis-ci.org/ummahusla/react-simple-card.svg?branch=master)](https://travis-ci.org/ummahusla/react-simple-card) [![Coverage Status](https://coveralls.io/repos/github/ummahusla/react-simple-card/badge.svg?branch=master)](https://coveralls.io/github/ummahusla/react-simple-card?branch=master)

Simple, easy to use and flexible cards in React.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Development](#development)
- [Contributing](#contributing)

## Installation

```
npm install --save react-simple-card
```

## Usage

The simplest example

```js
import React from "react";
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

const App = () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);

render(<App />, document.getElementById("root"));
```

## Examples

🛠️ At the moment, all examples can be found [**here**](https://github.com/ummahusla/react-simple-card/issues/7).

## Development

Looking forward to contribute? Here is the list of the npm scripts which you will need to run.

* `npm run setup` - Install all `npm` and `flow-typed` packages
* `npm test` - Run all tests (Jest)
* `npm run flow` - Run static type checker (Flow)


## Contributing

At the moment the component is still in development, but if you want to contribute you can do it by reviewing issues with [`help-wanted`](https://github.com/ummahusla/react-simple-card/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) label.

### Workflow

* Fork the repository
  * via HTTPS: `https://github.com/ummahusla/react-simple-card.git`
  * via SSH: `git@github.com:ummahusla/react-simple-card.git`
* Create new feature branch
  * `git checkout -b feature/new_feature`
* Commit your changes
  * `git commit -am 'insert_list_of_changes_here'`
* Cover new feature with tests; check `__tests__` folder.
* Run unit tests
  * `npm test`
* Run flow check
  * `npm run flow`
* Push the branch
  * `git push origin feature/new_feature`
* Submit a pull request!

## License

MIT License

Copyright (c) 2017 [Edvins Antonovs](https://twitter.com/edvinsantonovs)

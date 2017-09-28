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

All examples can be found [**here**](https://github.com/ummahusla/react-simple-card/issues/7) or in [**/examples**](/examples) folder.

## Development

* `npm run setup` - Install all `npm` and `flow-typed` packages
* `npm test` - Run all tests (Jest)
* `npm run flow` - Run static type checker (Flow)


## Contributing

Please check [**Contributing.md**](Contributing.md) to get started

## License

MIT License

Copyright (c) 2017 [Edvins Antonovs](https://twitter.com/edvinsantonovs)

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

- [**Basic layout**](https://codesandbox.io/s/611monz7qz) - `Card`, `CardHeader`, `CardBody`, `CardFooter` 
- [**Basic layout with Image header instead**](https://codesandbox.io/s/k2kwznw6qv) - `Card`, `ImageHeader`, `CardBody`, `CardFooter` 
- [**Without header**](https://codesandbox.io/s/zqk7jvrnym) - `Card`, `CardBody`, `CardFooter` 
- [**Body only**](https://codesandbox.io/s/vnlxr3l6j0) - `Card`, `CardBody`

Alternatively, you can find examples in [`/examples`](/examples) folder.

## Development

* `npm run setup` - Install all `npm` and `flow-typed` packages
* `npm test` - Run all tests (Jest)
* `npm run flow` - Run static type checker (Flow)


## Contributing

Please check [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

## License

MIT License

Copyright (c) 2017 [Edvins Antonovs](https://twitter.com/edvinsantonovs).

# [WIP] React Simple Card
[![Build Status](https://travis-ci.org/ummahusla/react-simple-card.svg?branch=master)](https://travis-ci.org/ummahusla/react-simple-card) [![Coverage Status](https://coveralls.io/repos/github/ummahusla/react-simple-card/badge.svg?branch=master)](https://coveralls.io/github/ummahusla/react-simple-card?branch=master)

// TODO

## Install

```
npm install --save react-simple-card
```

## Usage

```
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

## Settings

// TODO

## Development

* `npm run setup` - Install all `npm` and `flow-typed` packages
* `npm run flow` - Run static type checker
* `npm test` - Run all tests

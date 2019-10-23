# React Simple Card

[![Build Status](https://travis-ci.org/ummahusla/react-simple-card.svg?branch=master)](https://travis-ci.org/ummahusla/react-simple-card) [![Coverage Status](https://coveralls.io/repos/github/ummahusla/react-simple-card/badge.svg?branch=master)](https://coveralls.io/github/ummahusla/react-simple-card?branch=master)

Simple, easy to use and flexible cards in React.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)

## Installation

```
npm install --save react-simple-card
```

## Usage

The simplest example.

```js
import React from 'react';
import { render } from 'react-dom';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const App = () => (
    <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
);

render(<App />, document.getElementById('root'));
```

The simplest example with the `<ImageHeader>` instead of `<CardHeader>`.

```js
import React from 'react';
import { render } from 'react-dom';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const App = () => (
    <Card>
        <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
);

render(<App />, document.getElementById('root'));
```

## Usable properties

### `<Card>`

| Property    | Type     | Description                                                                                                                                        |
| :---------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`  | Function | Allows to nest any components inside `<Card>` component. This is the place where to `<CardHeader>`, `<ImageHeader>`, `<CardBody>`, `<CardFooter>`. |
| `bgColor`   | String   | Allows to change the default `#fff` background.                                                                                                    |
| `fontColor` | String   | Allows to change the default `#000` font color by passing a new value.                                                                             |
| `style`     | Object   | Allows to pass an object of CSS styles, to update or overwrite the default ones.                                                                   |
| `className` | String   | Allows to pass extra class names to the component.                                                                                                 |

### `<CardHeader>`

| Property    | Type     | Description                                                                                                                     |
| :---------- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `children`  | Function | Allows to render child elements inside the `<CardHeader>` component. Perfect section to place `<h1>`, `<h2>`, `<h3>`, etc tags. |
| `style`     | Object   | Allows to pass an object of CSS styles, to update or overwrite the default ones.                                                |
| `className` | String   | Allows to pass extra class names to the component.                                                                              |

### `<ImageHeader>`

| Property    | Type   | Description                                                                      |
| :---------- | :----- | :------------------------------------------------------------------------------- |
| `imageSrc`  | String | Allows to pass the image URL which will be rendered inside the component.        |
| `style`     | Object | Allows to pass an object of CSS styles, to update or overwrite the default ones. |
| `className` | String | Allows to pass extra class names to the component.                               |

### `<CardBody>`

| Property    | Type     | Description                                                                                                    |
| :---------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| `children`  | Function | Allows to render child elements inside the <CardBody> component. Good idea to use it to pass inner components. |
| `style`     | Object   | Allows to pass an object of CSS styles, to update or overwrite the default ones.                               |
| `className` | String   | Allows to pass extra class names to the component.                                                             |

### `<CardFooter>`

| Property    | Type     | Description                                                                      |
| :---------- | :------- | :------------------------------------------------------------------------------- |
| `children`  | Function | Allows to render child elements inside the <CardFooter> component.               |
| `style`     | Object   | Allows to pass an object of CSS styles, to update or overwrite the default ones. |
| `className` | String   | Allows to pass extra class names to the component.                               |

## License

MIT License

Copyright (c) 2019 [Edvins Antonovs](https://twitter.com/edvinsantonovs).

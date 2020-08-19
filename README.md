# react-to-text

![npm](https://img.shields.io/npm/v/react-to-text)
![CI](https://github.com/lhansford/react-to-text/workflows/CI/badge.svg)

Convert react components to plain text without any HTML markup. Written in Typscript with zero dependencies.

## Installation

```sh
yarn add react-to-text
npm install --save react-to-text
```

## Usage

react-to-text takes in any React component and will return the text content (without any HTML). It
will accept any value React can render (strings, arrays, Fragments, etc.), and can handle deeply
nested components.

```JSX
import reactToText from 'react-to-text';

const text = reactToText(
  <div>
    We sell <a href="/apples">apples</a> and <a href="/oranges"> oranges</a>.
  </div>
)

console.log(text);
> "We sell apples and oranges."
```

## License

Licensed under MIT.

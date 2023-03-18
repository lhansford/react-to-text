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

### Out of the box

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

### Custom logic

The default logic won't always work, for example when you have a custom component which simply renders one of it's props.
In this case you can define custom stringification behavior using a second argument.

```jsx
import reactToText, { ResolverMap } from 'react-to-text';

const CustomComponent: React.FC<{ title: string }> = (props) => <p>{props.title}</p>;

// since this component does not have any direct children
// it will not output anything by default
console.log(reactToText(<CustomComponent title="foo" />));
> ""

// using a custom resolver map using the custom component as it's key
// and the stringification logic as it's value, we can adjust this behavior
const resolvers: ResolverMap = new Map([
  [CustomComponent, (props: { title: string }) => props.title],
]);
console.log(reactToText(<CustomComponent title="foo" />, resolvers));
> "foo"
```

## Deploying

Deploys to NPM are automatically run when a release is created in Github (see [`.github/workflows/npm-publish.yml`](.github/workflows/npm-publish.yml)).

## License

Licensed under MIT.

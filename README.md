# ReactTextIlluminator

ReactTextIlluminator is a React component designed to highlight specific text within a larger body of text. It can be useful for indicating search results, highlighting keywords, or emphasizing certain terms.

[![size](https://img.shields.io/bundlephobia/minzip/react-text-illuminator?style=for-the-badge)](https://bundlephobia.com/package/react-text-illuminator)

[![Blazing Fast](https://badgen.now.sh/badge/SPEED/BLAZING%20%F0%9F%94%A5/green)](https://npm.im/react-text-illuminator)

## Installation

You can install the ReactTextIlluminator component

via npm:

```bash
npm i react-text-illuminator
```

or via yarn:

```bash
yarn add react-text-illuminator
```

## Features

- Text Highlighting
- SEO Friendly
- Customization of Highlight Term
- Customization of Highlight Color
- Support for Complex Text
- Escape of Special Characters

## Props

The ReactTextIlluminator component accepts the following props:

| Prop             | Type     | Description                                          | Default Value                                                    |
| ---------------- | -------- | ---------------------------------------------------- | ---------------------------------------------------------------- |
| `textContent`    | `string` | The text content to be displayed.                    | -                                                                |
| `highlightTerm`  | `string` | The text to be highlighted within the `textContent`. | -                                                                |
| `highlightColor` | `string` | The background color used for highlighting.          | ![#00d1a0](https://via.placeholder.com/10/ffff00?text=+) #ffff00 |  |

## Usage

To use the ReactTextIlluminator component, simply import it into your React application and include it in your JSX markup.

```jsx
import React from 'react';
import ReactTextIlluminator from 'react-text-illuminator';

const App = () => {
  return (
    <div>
      <h1>Search Results</h1>
      <ReactTextIlluminator
        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        highlightTerm="Lorem"
        highlightColor="yellow"
      />
    </div>
  );
};

export default App;
```

## Documentation

[Documentation](https://github.com/fredarcito/react-text-illuminator)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## 🚀 About Me

Hello everyone, I'm fredarcito, a Frontend engineer in constant learning. I only know that I don't know anything, but Google knows.

## Feedback

If you have any feedback, please reach out to us at freddy@gogrow.dev

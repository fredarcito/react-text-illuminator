# HighlightText Component

HighlightText is a React component designed to highlight specific text within a larger body of text. It can be useful for indicating search results, highlighting keywords, or emphasizing certain terms.

## Installation

You can install the HighlightText component via npm:

## Props

The HighlightText component accepts the following props:

| Prop              | Type     | Description                                          | Default Value |
| ----------------- | -------- | ---------------------------------------------------- | ------------- |
| `textContent`     | `string` | The text content to be displayed.                    | -             |
| `highlightedText` | `string` | The text to be highlighted within the `textContent`. | -             |
| `highlightColor`  | `string` | The background color used for highlighting.          | `"yellow"`    |

## Usage

To use the HighlightText component, simply import it into your React application and include it in your JSX markup.

```jsx
import React from 'react';
import HighlightText from '@tu-usuario/highlight-text';

const App = () => {
  return (
    <div>
      <h1>Search Results</h1>
      <HighlightText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        highlightedText="Lorem"
        highlightColor="yellow"
      />
    </div>
  );
};

export default App;
```

# ReactTextIlluminator

ReactTextIlluminator is a React component designed to highlight specific text within a larger body of text. It can be useful for indicating search results, highlighting keywords, or emphasizing certain terms.

## Installation

You can install the ReactTextIlluminator component via npm:

## Props

The ReactTextIlluminator component accepts the following props:

| Prop              | Type     | Description                                          | Default Value |
| ----------------- | -------- | ---------------------------------------------------- | ------------- |
| `textContent`     | `string` | The text content to be displayed.                    | -             |
| `highlightedText` | `string` | The text to be highlighted within the `textContent`. | -             |
| `highlightColor`  | `string` | The background color used for highlighting.          | `"yellow"`    |

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
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        highlightedText="Lorem"
        highlightColor="yellow"
      />
    </div>
  );
};

export default App;
```

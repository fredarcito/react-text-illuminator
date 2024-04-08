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
- Zero dependencies: Self-contained solution, ensuring reliability and ease of deployment.
- Customization of Highlight Term
- Customization of Highlight Color
- Support for Complex Text
- Escape of Special Characters

## Demo

Live:

[Codesandbox Demo](https://codesandbox.io/p/devbox/reacttextilluminator-demo-27jcw2?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clumtd11z00063b6tgckk4jli%2522%252C%2522sizes%2522%253A%255B81.59263271939328%252C18.40736728060672%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clumtd11z00023b6ta6jydck4%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clumtd11z00043b6tkrdys68c%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clumtd11z00053b6t2wqxsd66%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B58.950705979270836%252C41.049294020729164%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clumtd11z00023b6ta6jydck4%2522%253A%257B%2522id%2522%253A%2522clumtd11z00023b6ta6jydck4%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clumtd11z00053b6t2wqxsd66%2522%253A%257B%2522id%2522%253A%2522clumtd11z00053b6t2wqxsd66%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clumuibu1020d3b6thvekntef%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clumuibu1020d3b6thvekntef%2522%257D%252C%2522clumtd11z00043b6tkrdys68c%2522%253A%257B%2522id%2522%253A%2522clumtd11z00043b6tkrdys68c%2522%252C%2522activeTabId%2522%253A%2522clumui72p01xo3b6to23dh2lp%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clumtd11z00033b6t4hcryacm%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clumtd1gv000hdaf84mmr5ixt%2522%257D%252C%257B%2522id%2522%253A%2522clumui72p01xo3b6to23dh2lp%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clumui769000zdaf8d8uy2nbu%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

![ReactTextIlluminator](https://github.com/fredarcito/react-text-illuminator/blob/main/assets/demo.gif?raw=true)

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

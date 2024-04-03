import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HighlightText from '../src/index';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HighlightText
        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo eu velit lacinia dignissim. Integer nec pretium felis."
        highlightTerm="Lorem"
        highlightColor="yellow"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

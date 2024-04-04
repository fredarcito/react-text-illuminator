import React from 'react';

interface ReactTextIlluminatorProps {
  textContent: string;
  highlightTerm?: string;
  highlightColor?: string;
}

const ReactTextIlluminator: React.FC<ReactTextIlluminatorProps> = ({
  textContent,
  highlightTerm = '',
  highlightColor = '#ffff00',
}) => {
  const highlight = (
    textContent: string,
    highlightTerm: string
  ): JSX.Element[] => {
    const escapeRegExp = (string: string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    if (!highlightTerm.trim() || highlightTerm === '') {
      return [<span key="0">{textContent}</span>];
    }

    const textEscaped = escapeRegExp(highlightTerm);

    const regex = new RegExp(`(${textEscaped})`, 'gi');

    const splits = textContent.split(regex);

    return splits.map((split, index) =>
      regex.test(split.toLowerCase()) ? (
        <span key={index} style={{ backgroundColor: highlightColor }}>
          {split}
        </span>
      ) : (
        <span key={index}>{split}</span>
      )
    );
  };

  return <p>{highlight(textContent, highlightTerm)}</p>;
};

export default ReactTextIlluminator;

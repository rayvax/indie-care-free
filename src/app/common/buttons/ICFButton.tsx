import * as React from 'react';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes
{
  buttonType?: 'primary' | 'secondary';
  content?: string;
}

function ICFButton({ buttonType, content, className, ...other }: Props)
{
  let buttonTypeClassName = (buttonType === 'secondary') ? "secondary-button" : "primary-button";

  return (
    <button
      { ...other }
      className={ `${buttonTypeClassName} ${className || ''}` }
    >
      { content || other.children }
    </button>
  );
}

export default ICFButton;
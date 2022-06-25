import * as React from 'react';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes
{
  buttonType?: 'primary' | 'secondary';
  content?: string;
  disabled?: boolean;
}

function Button({ buttonType, content, disabled, ...other }: Props)
{
  let buttonClass = (buttonType === 'secondary') ? "secondary-button" : "primary-button";

  return (
    <button className={ buttonClass }
      disabled={ disabled }
      { ...other }
    >
      { content || other.children }
    </button>
  );
}

export default Button;
import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement>
{
  buttonType?: 'primary' | 'secondary';
  content?: string;
  disabled?: boolean;
}

function Button({ buttonType, content, disabled, ...other }: Props)
{
  let buttonClass = (buttonType === 'secondary') ? "icf-secondary-button" : "icf-primary-button";

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
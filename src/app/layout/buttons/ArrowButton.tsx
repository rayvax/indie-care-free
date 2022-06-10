import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement>
{
    direction: 'left' | 'right';
    isFilled?: boolean;
}

function ArrowButton({ direction, isFilled, ...props }: Props) 
{
    const imageFileName = (direction == 'left' ? "left-arrow-" : "right-arrow-")
        + (isFilled ? "white.svg" : "purple.svg");

    return (
        <button
            className={ `icf-arrow-button ${direction} ${isFilled && "filled"}` }
            { ...props }
        >
            <img
                src={ `icons/arrows/${imageFileName}` }
                alt={ `${direction} arrow button` }
            />
        </button>
    );
}

export default ArrowButton;
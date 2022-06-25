import * as React from 'react';
import Icon, { IconType } from '../Icon';

interface Props extends React.HTMLAttributes<HTMLButtonElement>
{
    direction: 'left' | 'right';
    isFilled?: boolean;
}

function ArrowButton({ direction, isFilled, ...props }: Props) 
{
    const icon: IconType = `${direction}-${(isFilled ? 'white' : 'purple')}-arrow`;

    return (
        <button
            className={ `arrow-button ${direction} ${isFilled && "filled"}` }
            { ...props }
        >
            <Icon type={ icon } alt={ direction } />
        </button>
    );
}

export default ArrowButton;
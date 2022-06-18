import * as React from 'react';
import CardImage from './CardImage';

function Card(props: React.HTMLAttributes<HTMLElement>) 
{
    const { children, className, ...rest } = props;

    return (
        <div { ...rest } className={ `card ${className ? className : ''}` }>
            { children }
        </div>
    );
}

Card.Image = CardImage;

export default Card;
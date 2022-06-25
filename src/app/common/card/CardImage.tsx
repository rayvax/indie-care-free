import * as React from 'react';

interface CardImageProps extends React.HTMLAttributes<HTMLImageElement>
{
    src: string;
    alt: string;
    description?: string;
    circled?: boolean;
}

function CardImage({ circled, className, src, alt, description, ...rest }: CardImageProps) 
{
    let imageClassName = 'card-image';
    if (circled)
        imageClassName += " circled";
    if (className)
        imageClassName += ` ${className}`;

    if (description)
        return (<figure>
            <img
                { ...rest }
                src={ src }
                alt={ alt }
                className={ imageClassName }
            />
            <figcaption className='image-description'>{ description }</figcaption>
        </figure>);

    return (<img
        { ...rest }
        src={ src }
        alt={ alt }
        className={ imageClassName }
    />);
}

export default CardImage;

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
    let imageClass = 'card-image';
    if (circled)
        imageClass += " circled";
    if (className)
        imageClass += ` ${className}`;

    if (description)
        return (<figure>
            <img
                { ...rest }
                src={ src }
                alt={ alt }
                className={ imageClass }
            />
            <figcaption className='image-description'>{ description }</figcaption>
        </figure>);

    return (<img
        { ...rest }
        src={ src }
        alt={ alt }
        className={ imageClass }
    />);
}

export default CardImage;

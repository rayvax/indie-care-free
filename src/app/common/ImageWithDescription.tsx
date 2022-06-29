import React, { CSSProperties } from 'react';

interface ImageWithDescriptionProps extends React.HTMLProps<HTMLImageElement>
{
    description?: string;
    circled?: boolean;

    imageClassName?: string;
    imageHeight?: string;
}

function ImageWithDescription(props: ImageWithDescriptionProps) 
{
    const {
        description,
        src,
        alt,
        circled = false,
        imageClassName,
        imageHeight,
        className,
        style,
        ...rest
    } = props;

    let figureStyle = style;
    if (imageHeight)
    {
        const heightVariableStyle = { '--image-height': imageHeight } as CSSProperties;
        figureStyle = { ...figureStyle, ...heightVariableStyle };
    }

    console.log(figureStyle);


    return (
        <figure
            { ...rest }
            style={ figureStyle }
            className={ `image-with-description ${className}` }
        >
            <img
                src={ src } alt={ alt }
                className={ `${circled ? 'circled' : ''} ${imageClassName || ''}` }
            />
            <figcaption>{ description }</figcaption>
        </figure>
    );
}

export default ImageWithDescription;
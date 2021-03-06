import * as React from 'react';
import { getIconPath } from '../utils/paths/imagePaths';

export type IconType = 'pencil' | 'tick-pink' | 'tick-purple' | 'x-pink' | 'x-purple' | 'search'
    | 'down-arrow' | 'left-purple-arrow' | 'right-purple-arrow' | 'left-white-arrow' | 'right-white-arrow'
    | 'plus' | 'minus' | 'image-placeholder';

interface IconProps extends React.HTMLAttributes<HTMLImageElement>
{
    type: IconType;
    alt?: string;
}

function Icon({ type, alt, ...props }: IconProps) 
{
    let iconFileName = type + '.svg';

    return (
        // через svg можно менять цвет
        <img
            { ...props }
            src={ getIconPath(iconFileName) }
            alt={ alt || type }
        />
    );
}

export default Icon;
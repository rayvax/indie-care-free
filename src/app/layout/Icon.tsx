import * as React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLImageElement>
{
    iconType: 'pencil' | 'tick-pink' | 'tick-purple' | 'x-pink' | 'x-purple' | 'star-empty' | 'star-half' | 'star-full' | 'star-empty-active' | 'star-half-active' | 'star-full-active' | 'favourite-empty' | 'favourite-full' | 'search';
}

function Icon({ iconType: icon, ...props }: IconProps) 
{
    let iconFileName = icon + '.svg';

    if (icon.startsWith("star"))
        iconFileName = "/stars/" + iconFileName;

    return (
        <img
            src={ `/icons/${iconFileName}` }
            alt={ icon }
        />
    );
}

export default Icon;
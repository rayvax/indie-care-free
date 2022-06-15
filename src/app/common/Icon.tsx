import * as React from 'react';

export type IconType = 'pencil' | 'tick-pink' | 'tick-purple' | 'x-pink' | 'x-purple'
    | 'star-empty' | 'star-half' | 'star-full' | 'star-empty-active' | 'star-half-active' | 'star-full-active'
    | 'down-arrow' | 'left-purple-arrow' | 'right-purple-arrow' | 'left-white-arrow' | 'right-white-arrow'
    | 'favourite-empty' | 'favourite-full' | 'search';

interface IconProps extends React.HTMLAttributes<HTMLImageElement>
{
    type: IconType;
}

function Icon({ type: icon, ...props }: IconProps) 
{
    let iconFileName = icon + '.svg';

    if (icon.startsWith("star"))
        iconFileName = "/stars/" + iconFileName;
    else if (icon.endsWith('arrow'))
        iconFileName = '/arrows/' + iconFileName;

    return (
        <img
            { ...props }
            src={ `/icons/${iconFileName}` }
            alt={ icon }
        />
    );
}

export default Icon;
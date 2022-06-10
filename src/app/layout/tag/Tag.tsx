import * as React from 'react';
import TagList from './TagList';

interface Props extends React.HTMLAttributes<HTMLLIElement>
{
    content?: string;
    closable?: boolean;
    onCloseClick?: React.MouseEventHandler<HTMLImageElement> | (() => void);
}

function Tag({ closable, content, onCloseClick, ...props }: Props) 
{
    return (
        <li className="icf-tag" { ...props }>
            { closable && <img onClick={ onCloseClick } src="icons\x-purple.svg" alt="purple x" /> }
            { content || props.children }
        </li>);
}

Tag.List = TagList;

export default Tag;
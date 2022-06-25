import * as React from 'react';
import TagList from './TagList';

interface Props extends React.HTMLAttributes<HTMLLIElement>
{
    content: string;
    closable?: boolean;
    onCloseClick?: (tag: string) => void;
}

function Tag({ closable, content, onCloseClick, ...props }: Props) 
{
    if (!onCloseClick)
        return <li></li>;

    return (
        <li className="tag" { ...props }>

            { closable &&
                <button type='button' title='remove' onClick={ () => onCloseClick(content) }>
                    <img src="./icons/x-purple.svg" alt="remove" />
                </button>
            }
            {/* сделать кнопку */ }
            { content }
        </li>);
}

Tag.List = TagList;

export default Tag;
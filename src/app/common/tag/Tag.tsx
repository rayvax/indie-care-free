import * as React from 'react';
import TagItem from './TagItem';
import TagList from './TagList';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement>
{
    content: string;
    closable?: boolean;
    onCloseClick?: (tag: string) => void;
}

function Tag({ closable, content, onCloseClick, ...props }: TagProps) 
{
    function handleRemoveClick()
    {
        if (onCloseClick)
            onCloseClick(content);
    }

    return (
        <div className="tag" { ...props }>

            { closable &&
                <button type='button' title='remove' onClick={ handleRemoveClick }>
                    <img src="/icons/x-purple.svg" alt="remove" />
                </button>
            }
            {/* сделать кнопку */ }
            { content }
        </div>);
}

Tag.List = TagList;
Tag.Item = TagItem;

export default Tag;
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Tag from '../tag/Tag';
import ICFTextInput from './ICFTextInput';

interface TagInputProps extends React.HTMLProps<HTMLInputElement>
{
    label?: string;
    onTagListChange?: (tagNames: string[]) => void;
}


function TagListInput({ onTagListChange, style, label, ...rest }: TagInputProps) 
{
    const [currentTag, setCurrentTag] = useState<string>('');
    const [tagList, setTagList] = useState<string[]>([]);

    function updateTagList(tagList: string[])
    {
        setTagList(tagList);
        if (onTagListChange)
            onTagListChange(tagList);
    }
    function addTagToList()
    {
        if (tagList.some(tag => tag === currentTag))
            return;

        updateTagList([...tagList, currentTag]);
        setCurrentTag('');
    }
    function handleTagChange(event: ChangeEvent<HTMLInputElement>)
    {
        const tag = event.target.value;

        if (tag.slice(-1) === ' ')
        {
            if (tag.length > 1)
                addTagToList();
        }
        else
            setCurrentTag(tag);
    }
    function handleKeyDown(event: KeyboardEvent)
    {
        if (event.key !== 'Tab')
            return;

        event.preventDefault();

        if (currentTag.length > 0)
            addTagToList();
    }
    function removeTag(targetTag: string)
    {
        updateTagList(tagList.filter(tag => tag !== targetTag));
    }

    return (
        <div style={ style }>
            <ICFTextInput
                onChange={ handleTagChange }
                onKeyDown={ handleKeyDown }
                value={ currentTag }
                label={ label }

                { ...rest }
            />
            <Tag.List>
                { tagList.map((tag) =>
                (
                    <Tag.Item
                        key={ tag }
                        content={ tag }
                        closable
                        onCloseClick={ removeTag }
                    />
                )) }
            </Tag.List>
        </div>

    );
}

export default TagListInput;
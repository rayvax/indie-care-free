import * as React from 'react';
import Tag, { TagProps } from './Tag';

function TagItem(tagProps: TagProps) 
{

    return (<li><Tag { ...tagProps } /></li>);
}

export default TagItem;
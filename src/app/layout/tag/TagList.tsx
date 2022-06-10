import * as React from 'react';


function TagList(props: React.HTMLAttributes<HTMLUListElement>)
{
    const tagClass = props.className ? props.className + " icf-tag-list" : "icf-tag-list";

    return (<ul className={ tagClass } { ...props }>{ props.children }</ul>);
}

export default TagList;
import * as React from 'react';

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement>
{
    label?: string;
    content?: string;
}

function ICFTextArea({ label, content, ...props }: TextAreaProps) 
{
    return (
        <label className='input-label'>
            { label }
            <textarea
                rows={ 3 }
                { ...props }
            >
                { content || props.children }
            </textarea>
        </label>
    );
}

export default ICFTextArea;
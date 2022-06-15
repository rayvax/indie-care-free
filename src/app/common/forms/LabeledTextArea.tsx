import * as React from 'react';

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement>
{
    label?: string;
    content?: string;
}

function LabeledTextArea({ label, content, className, ...props }: TextAreaProps) 
{
    const textAreaClasses = className ? className + " icf-text-area" : "icf-text-area";

    return (
        <label className='icf-label'>
            { label }
            <textarea
                rows={ 3 }
                { ...props }
                className={ textAreaClasses }
            >
                { content || props.children }
            </textarea>
        </label>
    );
}

export default LabeledTextArea;
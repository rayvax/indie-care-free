import * as React from 'react';

interface LabeledInputProps extends React.HTMLAttributes<HTMLInputElement>
{
    label?: string;
}

function LabeledTextInput({ label, className, ...props }: LabeledInputProps) 
{
    const inputClasses = className ? className + " icf-input" : "icf-input";

    return (
        <label className='icf-label'>
            { label }
            <input
                className={ inputClasses }
                { ...props }
                type='text'
            />
        </label>);
}

export default LabeledTextInput;
import * as React from 'react';

interface LabeledInputProps extends React.HTMLProps<HTMLInputElement>
{
    label?: string;
}

function ICFTextInput({ label, ...props }: LabeledInputProps) 
{
    return (
        <label className='input-label'>
            { label }
            <input
                { ...props }
                type='text'
            />
        </label>);
}

export default ICFTextInput;
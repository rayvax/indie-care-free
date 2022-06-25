import * as React from 'react';

interface LabeledInputProps extends React.HTMLProps<HTMLInputElement>
{
    label: string;
}

function ICFCheckbox({ label, className, ...props }: LabeledInputProps) 
{
    return (
        <>
            <input
                { ...props }
                type='checkbox'
                className={ `checkbox ${className}` }
            />
            <label htmlFor={ props.id || props.name || '' } >
                { label }
            </label>
        </>
    );
}

export default ICFCheckbox;
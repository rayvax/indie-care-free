import * as React from 'react';

interface LabeledInputProps extends React.HTMLProps<HTMLInputElement>
{
    label?: string;
    id: string;
}

function ICFCheckbox({ label, className, children, ...props }: LabeledInputProps) 
{
    return (
        <>
            <input
                { ...props }
                type='checkbox'
                className={ `checkbox ${className}` }
            />
            <label htmlFor={ props.id } >
                { label || children }
            </label>
        </>
    );
}

export default ICFCheckbox;
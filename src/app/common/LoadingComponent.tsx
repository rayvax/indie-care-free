import React from 'react';

interface LoadingComponentProps extends React.HTMLAttributes<HTMLElement>
{
    title?: string;
    spinnerSize?: number;
}

function LoadingComponent({ title, spinnerSize, className, ...rest }: LoadingComponentProps) 
{
    return (
        <div { ...rest } className={ `loading-component ${className || ''}` }>
            <div className='loading-spinner' style={ spinnerSize !== undefined ? { width: spinnerSize } : undefined }>
            </div>
            { title }
        </div>
    );
}

export default LoadingComponent;
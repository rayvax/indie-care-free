import * as React from 'react';

interface BlockWithSideContentProps extends React.HTMLAttributes<HTMLElement>
{
    sideImgSrc: string;
    sideImgAlt?: string;
    contentProportion: number;
    contentSide?: 'right' | 'left';
}

function BlockWithSideContentProps(props: BlockWithSideContentProps) 
{
    const { sideImgSrc, sideImgAlt, contentProportion, contentSide = 'left', className, children, ...otherProps } = props;

    return (
        <div { ...otherProps } className={ `block-with-side-content ${className || ''}` } >
            <div className={ `side-content ${contentSide}-sided` } style={ { boxSizing: "border-box", width: `${contentProportion * 100}%` } } >
                { children }
            </div>
            <img src={ sideImgSrc } alt={ sideImgAlt } style={ { width: `${(1 - contentProportion) * 100}%` } } />
        </div>
    );
}

export default BlockWithSideContentProps;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Icon, { IconType } from "./Icon";

interface DropDownProps extends React.HTMLAttributes<HTMLElement>
{
    title: string;
    titleClassName?: string;
    initiallyOpened?: boolean;

    icon?: IconType;
    rightSided?: boolean;
}

export default function DropDown(props: DropDownProps)
{
    const {
        title,
        titleClassName,
        initiallyOpened,
        icon,
        rightSided,
        children,
        className,
        ...rest } = props;
    const [isOpen, setIsOpen] = useState(initiallyOpened);

    const location = useLocation();

    React.useEffect(() =>
    {
        setIsOpen(initiallyOpened);
    }, [location, initiallyOpened]);

    return (
        <div { ...rest } className={ `dropdown ${className}` }>
            <button onClick={ () => setIsOpen(!isOpen) }>
                <span className={ titleClassName }>{ title }</span>
                { icon && <Icon type={ icon } alt='show' style={ { marginLeft: '5px' } } /> }
            </button>
            { isOpen &&
                <ul className={ "dropdown-content" + (rightSided ? " right-sided" : "") }>
                    { children && React.Children.map(children, child => (
                        <li>
                            { child }
                        </li>
                    )) }
                </ul>
            }
        </div>
    );
}
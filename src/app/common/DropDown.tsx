import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Icon, { IconType } from "./Icon";

interface DropDownProps extends React.HTMLAttributes<HTMLElement>
{
    title: string;
    initiallyOpened?: boolean;

    icon?: IconType;
    rightSided?: boolean;
}

export default function DropDown({ title, initiallyOpened, icon, rightSided, children }: DropDownProps)
{
    const [isOpen, setIsOpen] = useState(initiallyOpened);

    const location = useLocation();

    React.useEffect(() =>
    {
        setIsOpen(initiallyOpened);
    }, [location, initiallyOpened]);

    return (
        <div className={ "dropdown" }>
            <button onClick={ () => setIsOpen(!isOpen) }>
                { title }
                { icon && <Icon type={ icon } style={ { marginLeft: '5px' } } /> }
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
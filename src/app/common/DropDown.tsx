import React, { useState } from "react";

interface Props
{
    title: string;
    options: DropDownOption[];
    initiallyOpened?: boolean;

    iconPath?: string;
    rightSided?: boolean;
}

export interface DropDownOption
{
    title: string;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function DropDown({ title, options, initiallyOpened, iconPath, rightSided }: Props)
{
    const [isOpen, setIsOpen] = useState(initiallyOpened);

    return (
        <div className={ "dropdown" }>
            <button onClick={ () => setIsOpen(!isOpen) }>
                { title }
                { iconPath && <img src={ iconPath } alt={ "down arrow" } className={ "dropdown-icon" } /> }
            </button>
            { isOpen &&
                <ul className={ "dropdown-content" + (rightSided ? " right-sided" : "") }>
                    { options.map(opt =>
                    {
                        return <li><a href={ opt.href } onClick={ opt.onClick }>{ opt.title }</a></li>;
                    }) }
                </ul>
            }
        </div>
    );
}
import React, {useState} from "react";

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
    href: string;
}

export default function DropDown({title, options, initiallyOpened, iconPath, rightSided}: Props)
{
    const [isOpen, setIsOpen] = useState(initiallyOpened)

    return (
        <div className={"dropdown"}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {title}
                {iconPath && <img src={iconPath} alt={"dropdown-icon"} className={"dropdown-icon"}/>}
            </button>
            {isOpen &&
                <div className={"dropdown-content" + (rightSided ? " right-sided" : "")} >
                    {options.map(opt => {
                        return <a href={opt.href}>{opt.title}</a>
                    })}
                </div>
            }
        </div>
    )
}
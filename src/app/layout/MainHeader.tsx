import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "../common/DropDown";
import SearchBar from "../common/SearchBar";

const assetOptions = [
    { title: "3D", linkPath: "/assets" },
    { title: "2D", linkPath: "/assets" },
    { title: "Textures", linkPath: "/assets" },
    { title: "Sound Effects", linkPath: "/assets" },
    { title: "Music", linkPath: "/assets" },
    { title: "Scripts", linkPath: "/assets" },
];

const copyrightsOptions = [
    { title: "CC0", href: "https://creativecommons.org/publicdomain/zero/1.0/" },
    { title: "CC-BY 4.0", href: "https://creativecommons.org/publicdomain/zero/1.0/" },
    { title: "CC-BY-SA 4.0", href: "https://creativecommons.org/publicdomain/zero/1.0/" },
    { title: "CC-BY 3.0", href: "https://creativecommons.org/publicdomain/zero/1.0/" },
];


export default function MainHeader()
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <header className={ "main-header" }>
            <div className={ "logo" }>
                <NavLink to={ '/' }>
                    <img
                        src={ "./images/logo.webp" }
                        alt={ "IndieCareFree logo" }
                    />
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <DropDown
                            title={ "Assets" }
                            icon={ "down-arrow" }
                        >
                            { assetOptions.map(opt =>
                                <NavLink to={ opt.linkPath } key={ opt.title }>
                                    { opt.title }
                                </NavLink>)
                            }
                        </DropDown>
                    </li>
                    <li>
                        <NavLink to={ '/upload' }>Upload</NavLink>
                    </li>
                    <li>
                        <DropDown
                            title={ "Copyrights" }
                            icon={ "down-arrow" }
                        >
                            { copyrightsOptions.map(opt =>
                                <a href={ opt.href } key={ opt.title }>
                                    { opt.title }
                                </a>)
                            }
                        </DropDown>
                    </li>
                </ul>
            </nav>
            <div className={ "profile-area" }>
                { isLoggedIn ? (

                    <div>
                        <img
                            src={ "images/avatars/main-user.webp" }
                            alt={ "avatar" }
                            className={ "avatar" }
                            onClick={ () => setIsLoggedIn(false) }
                        />
                        <DropDown
                            title={ "Steve" }
                            icon={ "down-arrow" }
                            rightSided
                        >
                            <NavLink to={ '/profile' }>Profile</NavLink>
                            <NavLink to={ '/' } onClick={ () => setIsLoggedIn(false) }>Sign Out</NavLink>
                        </DropDown>
                    </div>
                ) : (
                    <ul>
                        <li>
                            <NavLink
                                to={ '/login' }
                                onClick={ () => setIsLoggedIn(true) }
                            >
                                Log in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ '/register' }
                                onClick={ () => setIsLoggedIn(true) }
                            >
                                Register
                            </NavLink>
                        </li>
                    </ul>
                )
                }
            </div>
            <SearchBar />
        </header>
    );
}
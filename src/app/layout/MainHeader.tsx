import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "../common/DropDown";
import SearchBar from "../common/SearchBar";
import { browseAssetsPagePath, homePagePath, loginPagePath, profilePagePath, registerPagePath, uploadPagePath } from "../utils/paths/routerPaths";
import { usePathname } from "../utils/react-router-dom";

const assetOptions = [
    { title: "3D", linkPath: browseAssetsPagePath },
    { title: "2D", linkPath: browseAssetsPagePath },
    { title: "Textures", linkPath: browseAssetsPagePath },
    { title: "Sound Effects", linkPath: browseAssetsPagePath },
    { title: "Music", linkPath: browseAssetsPagePath },
    { title: "Scripts", linkPath: browseAssetsPagePath },
];

const copyrightsOptions = [
    { title: "CC0", href: "https://creativecommons.org/publicdomain/zero/1.0/" },
    { title: "CC-BY 4.0", href: "https://creativecommons.org/publicdomain/zero/1.0/" },
    { title: "CC-BY-SA 4.0", href: "https://creativecommons.org/publicdomain/zero/1.0/" },
    { title: "CC-BY 3.0", href: "https://creativecommons.org/publicdomain/zero/1.0/" },
];


export default function MainHeader({ className, ...rest }: React.HTMLAttributes<HTMLElement>)
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();

    return (
        <header { ...rest } className={ `main-header ${className || ''}` }>
            <div className={ "logo" }>
                <NavLink to={ homePagePath }>
                    <img
                        src="./images/logo.webp"
                        alt="IndieCareFree logo"
                    />
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <DropDown
                            title={ "Assets" }
                            titleClassName={ pathname === browseAssetsPagePath ? 'current-page-title' : '' }
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
                        <NavLink to={ uploadPagePath }>Upload</NavLink>
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
                            src={ "./images/avatars/main-user.webp" }
                            alt={ "avatar" }
                            className={ "avatar" }
                            onClick={ () => setIsLoggedIn(false) }
                        />
                        <DropDown
                            title={ "Steve" }
                            icon={ "down-arrow" }
                            rightSided
                        >
                            <NavLink to={ profilePagePath }>Profile</NavLink>
                            <NavLink to={ homePagePath } onClick={ () => setIsLoggedIn(false) }>Sign Out</NavLink>
                        </DropDown>
                    </div>
                ) : (
                    <ul>
                        <li>
                            <NavLink
                                to={ loginPagePath }
                                onClick={ () => setIsLoggedIn(true) }
                            >
                                Log in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ registerPagePath }
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
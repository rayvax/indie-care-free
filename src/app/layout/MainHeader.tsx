import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DropDown from "../common/DropDown";
import SearchBar from "../common/SearchBar";
import { icfCategories, icfCopyrights } from "../utils/constants/icf-constants";
import { logoPath, mainUserAvatarPath } from "../utils/paths/imagePaths";
import { browseAssetsPagePath, homePagePath, loginPagePath, myProfilePagePath, profilePagePath, registerPagePath, uploadPagePath } from "../utils/paths/routerPaths";
import { usePathname } from "../utils/react-router-dom";

interface MainHeaderProps extends React.HTMLAttributes<HTMLElement>
{
    username: string | null;
    logoutUser: () => void;
}


export default function MainHeader({ username, logoutUser, className, ...rest }: MainHeaderProps)
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();
    const navigate = useNavigate();

    function handleSignOut()
    {
        logoutUser();
        navigate(homePagePath);
    }

    return (
        <header { ...rest } className={ `main-header ${className || ''}` }>
            <div className={ "logo" }>
                <NavLink to={ homePagePath }>
                    <img
                        src={ logoPath }
                        alt="IndieCareFree logo"
                    />
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <DropDown
                            title={ "Assets" }
                            titleClassName={ pathname.startsWith(browseAssetsPagePath) ? 'current-page-title' : '' }
                            icon={ "down-arrow" }
                        >
                            { icfCategories.map(category =>
                                <NavLink to={ browseAssetsPagePath } key={ category }>
                                    { category }
                                </NavLink>)
                            }
                        </DropDown>
                    </li>
                    <li>
                        <NavLink
                            to={ uploadPagePath }
                            className={ pathname === uploadPagePath ? 'current-page-title' : '' }
                        >
                            Upload
                        </NavLink>
                    </li>
                    <li>
                        <DropDown
                            title={ "Copyrights" }
                            icon={ "down-arrow" }
                        >
                            { icfCopyrights.map(copyright =>
                                <a href={ copyright.href } key={ copyright.title }>
                                    { copyright.title }
                                </a>)
                            }
                        </DropDown>
                    </li>
                </ul>
            </nav>
            <div className={ "profile-area" }>
                { username ? (

                    <div>
                        <img
                            src={ mainUserAvatarPath }
                            alt={ "avatar" }
                            className={ "avatar" }
                            onClick={ () => setIsLoggedIn(false) }
                        />
                        <DropDown
                            title={ username }
                            icon={ "down-arrow" }
                            rightSided
                        >
                            <NavLink to={ myProfilePagePath }>Profile</NavLink>
                            <NavLink to={ homePagePath } onClick={ handleSignOut }>Sign Out</NavLink>
                        </DropDown>
                    </div>
                ) : (
                    <ul>
                        <li>
                            <NavLink
                                to={ loginPagePath }
                            >
                                Log in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ registerPagePath }
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
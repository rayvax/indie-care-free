import React, {MouseEventHandler, useState} from "react";
import DropDown, {DropDownOption}           from "../common/DropDown";
import SearchBar                            from "../common/SearchBar";

const assetOptions: DropDownOption[] = [
    {title: "3D", href: "#3d"},
    {title: "2D", href: "#2d"},
    {title: "Textures", href: "#textures"},
    {title: "Sound Effects", href: "#sound_effects"},
    {title: "Music", href: "#music"},
    {title: "Scripts", href: "#scripts"},
]

const copyrightsOptions: DropDownOption[] = [
    {title: "CC0", href: "#cc0"},
    {title: "CC-BY 4.0", href: "#cc-by-4.0"},
    {title: "CC-BY-SA 4.0", href: "#cc-by-sa-4.0"},
    {title: "CC-BY 3.0", href: "#cc-by-3.0"}
]

const profileOptions: DropDownOption[] = [
    {title: "Profile", href: "#profile"},
    {title: "Sign out", href: "#sign-out"}
]

export default function MainHeader()
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>)
    {
        event.preventDefault();
        setIsLoggedIn(true);
    }

    return (
        <header className={"main-header"}>
            <div className={"main-content-area"}>

                <div className={"header-container"}>
                    <picture className={"logo"}>
                        <img src={"./images/logo.webp"}/>
                    </picture>
                    <nav>
                        <DropDown title={"Assets"}
                                  options={assetOptions}
                                  iconPath={"./icons/down_arrow.svg"}
                        />
                        <a href={"#upload"}>Upload</a>
                        <DropDown title={"Copyrights"}
                                  options={copyrightsOptions}
                                  iconPath={"./icons/down_arrow.svg"}
                        />
                    </nav>

                    <div className={"profile-area"}>
                        {isLoggedIn ? (
                            <div>
                                <img src={"images/avatars/main-user.webp"}
                                     alt={"avatar"}
                                     className={"avatar"}
                                     onClick={() => setIsLoggedIn(false)}
                                />
                                <DropDown title={"Steve"}
                                          options={profileOptions}
                                          iconPath={"./icons/down_arrow.svg"}
                                          rightSided
                                />
                            </div>
                        ) : (
                            <div>
                                <a href={"#login"}
                                   onClick={login}>
                                    Log in
                                </a>
                                <a href={"#register"}
                                   onClick={login}>
                                    Register
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <SearchBar />
            </div>
        </header>
    )
}
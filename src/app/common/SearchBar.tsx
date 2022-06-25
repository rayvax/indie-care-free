import React from "react";
import { NavLink } from "react-router-dom";
import { browseAssetsPagePath } from "../utils/paths/routerPaths";
import Icon from "./Icon";

export default function SearchBar()
{
    return (
        <div className={ "search-bar" }>
            <NavLink to={ browseAssetsPagePath } className={ 'search-icon' }>
                <Icon type='search' />
            </NavLink>
            <input type={ 'text' } id={ 'search-input' } name={ 'search-input' } />
        </div>
    );
}

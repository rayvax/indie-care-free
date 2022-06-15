import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

export default function SearchBar()
{
    return (
        <div className={ "search-bar" }>
            <NavLink to={ '/assets' } className={ 'search-icon' }>
                <Icon type='search' />
            </NavLink>
            <input type={ 'text' } id={ 'search-input' } name={ 'search-input' } />
        </div>
    );
}

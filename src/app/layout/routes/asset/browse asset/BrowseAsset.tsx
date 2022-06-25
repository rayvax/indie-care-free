import React, { useState } from 'react';
import { BrowseAsset } from '../../../../models/asset';

interface BrowseAssetProps extends React.HTMLAttributes<HTMLElement>
{
    asset: BrowseAsset;
}

function BrowseAssetComponent({ asset, className, ...rest }: BrowseAssetProps) 
{
    const [isFavourited, setIsFavourited] = useState(asset.isFavourited);
    const [isRated, setIsRated] = useState(asset.isRated);

    const stars = initStars(asset.rating, 5, asset.isRated);

    return (
        <div { ...rest } className={ `browse-asset-component ${className || ''}` }>
            <h2>{ asset.title }</h2>
            <img src={ asset.mainImage } alt={ `${asset.title}` } />
            <div className='statistics'>
                <ul className={ `rating ${isRated ? 'rated' : ''}` } onClick={ () => setIsRated(!isRated) }>
                    { stars.map((star, index) =>
                    (
                        <li key={ index }>
                            { star }
                        </li>
                    )) }
                </ul>
                <div className={ 'rating-count' }>
                    ({ asset.ratingsCount })
                </div>
                <button
                    type='button'
                    title='favourite'
                    onClick={ () => setIsFavourited(!isFavourited) }
                    className={ isFavourited ? 'favourited' : '' }
                >
                    <svg role='image' width="16" height="16" viewBox="0 0 60 53">
                        <use href={ `./icons/flexible icons/heart.svg#icon` } ></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}

//returns 2 dimensional array: stars[0] - full stars, stars[1] - center star, stars[2] - empty stars
function initStars(rating: number, starCount: number, active: boolean)
{
    rating = Math.max(
        0,
        Math.min(rating, starCount)
    );

    let stars: JSX.Element[] = [];

    //add full stars
    const fullStarsCount = Math.floor(rating);
    for (let i = 0; i < fullStarsCount; i++)
    {
        stars.push(
            <svg role='image' width="16" height="16" viewBox="0 0 66 63">
                <use href='./icons/flexible icons/full-star.svg#icon' ></use>
            </svg>);
    }

    //add full/half/empty star depending on centerStarValue
    const centerStarValue = rating % 1;
    let centerStarType;
    if (centerStarValue >= 0.25 && centerStarValue <= 0.75)
    {
        centerStarType = 'half-star';
    }
    else
    {
        centerStarType = centerStarValue < 0.25 ? 'empty-star' : 'full-star';
    }
    stars.push(
        <svg role='image' width="16" height="16" viewBox="0 0 66 63">
            <use href={ `./icons/flexible icons/${centerStarType}.svg#icon` } ></use>
        </svg>
    );

    //add empty star
    const emptyStarsBeginning = Math.ceil(rating);
    for (let i = emptyStarsBeginning; i < starCount; i++)
    {
        stars.push(
            <svg role='image' width="16" height="16" viewBox="0 0 66 63">
                <use href={ `./icons/flexible icons/empty-star.svg#icon` } ></use>
            </svg>);
    }

    return stars;
}

export default BrowseAssetComponent;

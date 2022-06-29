import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowseAsset } from '../../../../models/asset';
import { assetPagePath } from '../../../../utils/paths/routerPaths';
import AssetStatistic from '../AssetStatistic';

interface BrowseAssetProps extends React.HTMLAttributes<HTMLElement>
{
    asset: BrowseAsset;
}

function BrowseAssetComponent({ asset, className, ...rest }: BrowseAssetProps) 
{

    return (
        <div { ...rest } className={ `browse-asset-component ${className || ''}` }>
            <NavLink to={ assetPagePath('random-id') } >
                <h2>{ asset.title }</h2>
                <img src={ asset.mainImage } alt={ `${asset.title}` } />
            </NavLink>
            <AssetStatistic
                rating={ asset.rating }
                ratingsCount={ asset.ratingsCount }
                initiallyRated={ asset.isRated }
                initiallyFavourited={ asset.isFavourited }
            />
        </div>
    );
}

export default BrowseAssetComponent;

import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BlockWithSideContent from '../../common/BlockWithSideContent';
import ICFButton from '../../common/buttons/ICFButton';
import Card from '../../common/card/Card';
import Carousel from '../../common/Carousel';
import { mockProfilePreviews } from '../../models/user';
import { getImagePath } from '../../utils/paths/imagePaths';
import { assetPagePath, browseAssetsPagePath, newbiePagePath, profilePagePath } from '../../utils/paths/routerPaths';

const popularThisWeek = [
    "Mighty 2d assets budle", 'Pixelart items pack',
    "Warrior King", "Fantasy Chests",
    'Finji assets', 'Stone Tower Game assets',
];
const categories = [
    '3d', '2d', 'music', 'sounds', 'scripts', 'textures',
];

function HomePage()
{
    const navigate = useNavigate();

    return (
        <div className='home-page' style={ { margin: '35px 0' } }>
            <h1 className='visually-hidden'>Home Page</h1>
            <div style={ { margin: '0 0 40px' } }>
                <h2>Popular this&nbsp;week</h2>
                <Carousel itemsInPage={ 1 } itemHeight={ '475px' }>
                    { popularThisWeek.map(asset =>
                    (
                        <NavLink to={ assetPagePath('random-id') } key={ asset } className='nav-link'>
                            <img
                                src={ `/images/assets/Popular this week/${asset}.webp` }
                                alt={ asset }
                            />
                        </NavLink>
                    )) }
                </Carousel>
            </div>

            <div>
                <h2>Browse by&nbsp;categories</h2>
                <Carousel itemsInPage={ 4 } itemHeight={ '250px' }>
                    { categories.map(category =>
                    (
                        <NavLink to={ browseAssetsPagePath } key={ category }>
                            <Card>
                                <Card.Image src={ `/images/categories/${category}.png` } alt={ `${category}` } />
                            </Card>
                        </NavLink>
                    )) }
                </Carousel>
            </div>
            <BlockWithSideContent
                sideImgSrc={ getImagePath('new to icf bg.jpg') }
                sideImgAlt='The Last Night screenshot'
                contentProportion={ 0.4 }
                contentSide='left'
                style={ { margin: '70px 0 65px' } }
            >
                <h2>Get started</h2>
                <p className='emphasis-paragraph'><strong>New to&nbsp;IndieCareFree?</strong></p>
                <p>Check out copyright rules and community top picks for any expirience level.</p>
                <ICFButton
                    buttonType='primary'
                    content='Start Now'
                    onClick={ () => navigate(newbiePagePath) }
                />
            </BlockWithSideContent>
            <div>
                <h2>Top rated publishers</h2>
                <Carousel itemsInPage={ 5 } itemHeight={ '250px' }>
                    { mockProfilePreviews.map(profile =>
                    (
                        <Card key={ profile.name }>
                            <NavLink to={ profilePagePath }>
                                <Card.Image
                                    src={ profile.avatar }
                                    alt={ profile.name + ' avatar' }
                                    description={ profile.name }
                                    circled
                                />
                            </NavLink>
                        </Card>
                    )) }
                </Carousel>
            </div>
        </div>
    );
}

export default HomePage;
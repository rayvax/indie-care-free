import * as React from 'react';
import { NavLink } from 'react-router-dom';
import BlockWithSideContentProps from '../../common/BlockWithSideContent';
import Button from '../../common/buttons/Button';
import Card from '../../common/card/Card';
import Carousel from '../../common/carousels/Carousel';
import { mockProfilePreviews } from '../../models/user';

const popularThisWeek = [
    "Mighty 2d assets budle", 'Pixelart items pack',
    "Warrior King", "Fantasy Chests",
    'Finji assets', 'Stone Tower Game assets',
];
const popularThisWeekStyles: React.CSSProperties =
{
    objectFit: 'cover',
    height: '60vh',
};

const categories = [
    '3d', '2d', 'music', 'sounds', 'scripts', 'textures',
];

function HomePage()
{
    return (
        <>
            <div style={ { margin: '35px 0 40px' } }>
                <h2>Popular this week</h2>
                <Carousel elementsInPage={ 1 }>
                    { popularThisWeek.map(asset =>
                    (
                        <img
                            key={ asset }
                            src={ `./images/assets/Popular this week/${asset}.webp` }
                            alt={ asset }
                            style={ popularThisWeekStyles }
                        />
                    )) }
                </Carousel>
            </div>

            <div>
                <h2>Browse by categories</h2>
                <Carousel elementsInPage={ 4 }>
                    { categories.map(category =>
                    (
                        <NavLink to={ '/assets' } key={ category }>
                            <Card>
                                <Card.Image src={ `/images/categories/${category}.png` } alt={ `${category} icon` } />
                            </Card>
                        </NavLink>
                    )) }
                </Carousel>
            </div>
            <BlockWithSideContentProps
                sideImgSrc='/images/new to icf bg.jpg'
                sideImgAlt='The Last Night screenshot'
                contentProportion={ 0.4 }
                contentSide='left'
                style={ { margin: '70px 0 65px' } }
            >
                <h2>Get started<br /><strong>New to IndieCareFree?</strong></h2>
                <p>Check out copyright rules and community top picks for any expirience level.</p>
                <Button buttonType='primary' content='Start Now' />
            </BlockWithSideContentProps>
            <div>
                <h2>Top rated publishers</h2>
                <Carousel elementsInPage={ 5 }>
                    {/* temporary placeholder */ }
                    { mockProfilePreviews.map(profile =>
                    (
                        <Card key={ profile.name }>
                            <Card.Image
                                src={ profile.avatar }
                                alt={ profile.name + ' avatar' }
                                description={ profile.name }
                                circled
                            />
                        </Card>
                    )) }
                </Carousel>
            </div>
        </>
    );
}

export default HomePage;
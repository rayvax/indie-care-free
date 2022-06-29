import React, { MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ICFButton from '../../../common/buttons/ICFButton';
import Carousel from '../../../common/Carousel';
import ICFTextArea from '../../../common/forms/ICFTextArea';
import TabbedContent from '../../../common/tabbed-content/TabbedContent';
import TabbedContentGroup from '../../../common/tabbed-content/TabbedContentGroup';
import TabbedContentPanel from '../../../common/tabbed-content/TabbedContentPanel';
import TabbedContentTab from '../../../common/tabbed-content/TabbedContentTab';
import Tag from '../../../common/tag/Tag';
import { getAvatarPath, getRandomAssetImagePath } from '../../../utils/paths/imagePaths';
import { profilePagePath } from '../../../utils/paths/routerPaths';
import AssetStatistic from './AssetStatistic';

const screenshotCount = 6;
let screenshotPaths: string[] = [];
for (let i = 0; i < screenshotCount; i++)
{
    screenshotPaths.push(getRandomAssetImagePath());
}

const tags = ['gnome', 'forest', 'fantasy', 'pixelart', 'egypt', 'battle'];

function AssetPage()
{
    const [activeTab, setActiveTab] = useState(1);

    function handleTabClick(event: MouseEvent, tabNumber: number)
    {
        event.preventDefault();
        setActiveTab(tabNumber);
    }

    return (
        <div className='asset-page'>
            <div className='asset-content'>
                <Carousel itemsInPage={ 1 } itemHeight={ '420px' } buttonsOnBottom>
                    { screenshotPaths.map(path =>
                    (
                        <img src={ path } alt="screenshot" />
                    )) }
                </Carousel>

                <div className="tabbed-content">
                    <ul role="tablist">
                        <li role="presentation">
                            <h2>
                                <a
                                    role="tab"
                                    href="#description-section"
                                    id="tab1"
                                    aria-selected={ activeTab === 1 }
                                    onClick={ event => handleTabClick(event, 1) }
                                >
                                    Description
                                </a>
                            </h2>
                        </li>
                        <li role="presentation">
                            <h2>
                                <a
                                    role="tab"
                                    href="#download-section"
                                    id="tab2"
                                    aria-selected={ activeTab === 2 }
                                    onClick={ event => handleTabClick(event, 2) }
                                >
                                    Download
                                </a>
                            </h2>
                        </li>
                    </ul>
                    <section
                        role="tabpanel"
                        id="description-section"
                        aria-labelledby="tab1"
                        hidden={ activeTab !== 1 }
                    >
                        <p>Your little horde of&nbsp;dwarves is&nbsp;ready to&nbsp;lay into the neighboring tribes. The rats stealing the cook&rsquo;s prize cook pot was the last straw&nbsp;&mdash; now they&rsquo;re out for revenge... and a&nbsp;delicious rat-tail stew! But the dwarves need some leadership&nbsp;&mdash; are you up&nbsp;to&nbsp;it?
                        </p>
                        <p>In&nbsp;this pixel game, you&rsquo;ll accompany your mob of&nbsp;dwarves on&nbsp;a&nbsp;host of&nbsp;missions. Sometimes just to&nbsp;collect wood, berries, or&nbsp;other resources; at&nbsp;other times you&rsquo;ll prove your derring-do on&nbsp;dangerous rescue missions to&nbsp;bolster your troops.
                        </p>
                        <p>Dark Gnome is&nbsp;a&nbsp;mix of&nbsp;round-based strategy and roleplaying genres. Charming retro 2D&nbsp;graphics bring back the good &lsquo;ole days of&nbsp;turn-based battle games. Captivating PvE battles provide non-stop suspense, but if&nbsp;that isn&rsquo;t enough spine-tingling action for you, you can also face off against your fellow players in&nbsp;PvP mode.
                        </p>
                    </section>
                    <section
                        role="tabpanel"
                        id="download-section"
                        aria-labelledby="tab2"
                        hidden={ activeTab !== 2 }
                    >
                        <ul className='download-list'>
                            <li>
                                <ICFButton content='gn_sounds.wow' type='button' />
                                <span className='weight'>38.5 <dfn id='mb'><abbr title='Mega bytes'>Mb</abbr></dfn></span>
                            </li>
                            <li>
                                <ICFButton content='gnome.zip' type='button' />
                                <span className='weight'>18.4 <abbr title='Mega bytes'>Mb</abbr></span>
                            </li>
                            <li>
                                <ICFButton content='gnome_movement.png' type='button' />
                                <span className='weight'>4.0 <abbr title='Mega bytes'>Mb</abbr></span>
                            </li>
                        </ul>
                    </section>
                </div>

                <section className='comments-section'>
                    <h2>Comments</h2>
                    <ol className='comments-list'>
                        <li>
                            <NavLink to={ profilePagePath } className='author'>
                                <div>
                                    <img src={ getAvatarPath(11) } alt='avatar' className='circled' />
                                </div>
                                <cite>Heath Ledger</cite>
                            </NavLink>
                            <div className='message'>
                                <p>That&rsquo;s cool!</p>
                            </div>
                        </li>
                        <li>
                            <NavLink to={ profilePagePath } className='author'>
                                <div>
                                    <img src={ getAvatarPath(10) } alt='avatar' className='circled' />
                                </div>
                                <cite>Micky</cite>
                            </NavLink>
                            <div className='message'>
                                <p>Definitely using this epic music. Great Determination is&nbsp;planned to&nbsp;be&nbsp;used for a&nbsp;character select/base menu for a&nbsp;Tactical FE-inspired RPG, while a&nbsp;couple of&nbsp;the other songs work well as&nbsp;both theme music and boss music.^^</p>
                            </div>
                        </li>
                    </ol>
                    <form>
                        <ICFTextArea />
                        <ICFButton type='submit' content='Add comment' />
                    </form>
                </section>

            </div>
            <div className='asset-info'>
                <h1>Dark gnome</h1>

                <div className='main-info'>
                    <NavLink to={ profilePagePath }>
                        <img src={ getAvatarPath(1) } alt='Author avatar' className='avatar circled' />
                    </NavLink>
                    <NavLink to={ profilePagePath }>
                        <cite>Donny</cite>
                    </NavLink>
                    <AssetStatistic
                        rating={ 3.5 }
                        ratingsCount={ 70 }
                        initiallyRated={ false }
                        initiallyFavourited={ false }
                    />
                </div>


                <div className="tags-info">
                    <h2>Tags:</h2>
                    <Tag.List>
                        { tags.map(tag =>
                        (
                            <Tag.Item key={ tag } content={ tag } />
                        )) }
                    </Tag.List>
                </div>
                <div className="license">
                    <h2>License:</h2>
                    <Tag content='CC0-BY 3.0' />
                </div>

            </div>
        </div>
    );
}

export default AssetPage;
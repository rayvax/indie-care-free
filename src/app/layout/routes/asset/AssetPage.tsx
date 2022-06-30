import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ICFButton from '../../../common/buttons/ICFButton';
import Carousel from '../../../common/Carousel';
import ICFTextArea from '../../../common/forms/ICFTextArea';
import Tag from '../../../common/tag/Tag';
import { Comment } from '../../../models/comment';
import { getRandomProfilePreviews } from '../../../models/user';
import { getAvatarPath, getRandomAssetImagePath, mainUserAvatarPath } from '../../../utils/paths/imagePaths';
import { loginPagePath, profilePagePath, registerPagePath } from '../../../utils/paths/routerPaths';
import AssetStatistic from './AssetStatistic';

const screenshotCount = 6;
let screenshotPaths: string[] = [];
for (let i = 0; i < screenshotCount; i++)
{
    screenshotPaths.push(getRandomAssetImagePath());
}

const tags = ['gnome', 'forest', 'fantasy', 'pixelart', 'egypt', 'battle'];

interface AssetPageProps
{
    username: string | null;
}

function AssetPage({ username }: AssetPageProps)
{
    const [activeTab, setActiveTab] = useState(1);
    const [userComment, setUserComment] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() =>
    {
        const profilePreviews = getRandomProfilePreviews(2);
        const mockMessages = [
            'That\u0027s cool!',
            `Definitely using this epic music. Great Determination is\xa0planned to\xa0be\xa0used for a\xa0character select/base menu for a\xa0Tactical FE-inspired RPG, while a\xa0couple of\xa0the other songs work well as\xa0both theme music and boss music.^^`
        ];

        setComments(profilePreviews.map((profile, i) =>
        ({
            author: profile,
            message: mockMessages[i]
        })));
    }, []);

    function handleTabClick(event: MouseEvent, tabNumber: number)
    {
        event.preventDefault();
        setActiveTab(tabNumber);
    }

    function handleCommentSubmit(event: FormEvent)
    {
        event.preventDefault();

        setComments([...comments, {
            author: {
                name: username!,
                avatar: mainUserAvatarPath
            },
            message: userComment
        }]);

        setUserComment('');
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
                        <p>Your little horde of\xa0dwarves is\xa0ready to\xa0lay into the neighboring tribes. The rats stealing the cook&rsquo;s prize cook pot was the last straw\xa0&mdash; now they&rsquo;re out for revenge... and a\xa0delicious rat-tail stew! But the dwarves need some leadership\xa0&mdash; are you up\xa0to\xa0it?
                        </p>
                        <p>In\xa0this pixel game, you&rsquo;ll accompany your mob of\xa0dwarves on\xa0a\xa0host of\xa0missions. Sometimes just to\xa0collect wood, berries, or\xa0other resources; at\xa0other times you&rsquo;ll prove your derring-do on\xa0dangerous rescue missions to\xa0bolster your troops.
                        </p>
                        <p>Dark Gnome is\xa0a\xa0mix of\xa0round-based strategy and roleplaying genres. Charming retro 2D\xa0graphics bring back the good &lsquo;ole days of\xa0turn-based battle games. Captivating PvE battles provide non-stop suspense, but if\xa0that isn&rsquo;t enough spine-tingling action for you, you can also face off against your fellow players in\xa0PvP mode.
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
                        { comments.map(comment =>
                        (
                            <li key={ `${comment.author.name}'s comment` }>
                                <NavLink to={ profilePagePath } className='author'>
                                    <div>
                                        <img src={ comment.author.avatar } alt='avatar' className='circled' />
                                    </div>
                                    <cite>{ comment.author.name }</cite>
                                </NavLink>
                                <div className='message'>
                                    <p>{ comment.message }</p>
                                </div>
                            </li>
                        )) }
                    </ol>
                    <div className='user-comment'>
                        { username ? (
                            <form onSubmit={ handleCommentSubmit }>
                                <ICFTextArea
                                    name='comment'
                                    id='user-comment'
                                    value={ userComment }
                                    onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => setUserComment(event.target.value) }
                                />
                                <ICFButton
                                    type='submit'
                                    content='Add comment'
                                    disabled={ userComment.trim().length <= 0 }
                                />
                            </form>
                        ) : (
                            <div className='unregistered'>
                                Please <NavLink to={ loginPagePath }>log in</NavLink> to&nbsp;be&nbsp;able leave the comment
                            </div>
                        ) }
                    </div>
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
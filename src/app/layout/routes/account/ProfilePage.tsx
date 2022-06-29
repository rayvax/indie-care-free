import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ICFButton from '../../../common/buttons/ICFButton';
import ICFTextInput from '../../../common/forms/ICFTextInput';
import Icon from '../../../common/Icon';
import ImageWithDescription from '../../../common/ImageWithDescription';
import LoadingComponent from '../../../common/LoadingComponent';
import { AssetPreview, getMockAssetPreviews } from '../../../models/asset';
import { getRandomProfilePreviews as getMockProfilePreviews, ProfilePreview } from '../../../models/user';
import { getAvatarPath, mainUserAvatarPath } from '../../../utils/paths/imagePaths';
import { assetPagePath, profilePagePath } from '../../../utils/paths/routerPaths';
import { getRandomIntInclusive } from '../../../utils/random-utils';

interface ProfilePageProps
{
    username?: string;
    setUser?: (username: string) => void;
}


function ProfilePage({ username, setUser }: ProfilePageProps)
{
    const [isFollowed, setIsFollowed] = useState(false);
    const [activeFollowTab, setActiveFollowTab] = useState(username ? 3 : 1);
    const [activeAssetTab, setActiveAssetTab] = useState(1);

    const [follows, setFollows] = useState<ProfilePreview[]>([]);
    const [followers, setFollowers] = useState<ProfilePreview[]>([]);
    const [userAssets, setUserAssets] = useState<AssetPreview[]>([]);
    const [favouriteAssets, setFavouriteAssets] = useState<AssetPreview[]>([]);

    const [isChangingUsername, setIsChagingUsername] = useState(false);
    const [newUsername, setNewUsername] = useState<string>('');

    useEffect(() =>
    {
        setFollows(getMockProfilePreviews());
        setFollowers(getMockProfilePreviews());

        getMockAssetPreviews(getRandomIntInclusive(1, 19)).then(assets => setUserAssets(assets));
        getMockAssetPreviews(getRandomIntInclusive(1, 19)).then(assets => setFavouriteAssets(assets));
    }, []);


    function handleFollowTabClick(event: MouseEvent, activeTab: number)
    {
        event.preventDefault();
        setActiveFollowTab(activeTab);
    }
    function handleAssetTabClick(event: MouseEvent, activeTab: number)
    {
        event.preventDefault();
        setActiveAssetTab(activeTab);
    }
    function startChanginUsername()
    {
        setNewUsername(username!);
        setIsChagingUsername(true);
    }
    function applyNewUsername()
    {
        setIsChagingUsername(false);

        if (setUser)
            setUser(newUsername);
    }

    return (
        <div className='profile-page'>
            <h1 className='visually-hidden'>Profile</h1>
            <div className='main-info'>
                <img src={ username ? mainUserAvatarPath : getAvatarPath(1) } alt="avatar" className="avatar circled" />
                <ul>
                    <li className='nickname'>{ username || 'Donny' }</li>
                    { !username &&
                        <li className='email'>
                            <a href="mailto:donatello@gmail.com">donatello@gmail.com</a>
                        </li>
                    }
                </ul>
                { !username &&
                    <ICFButton
                        type='button'
                        buttonType={ isFollowed ? 'secondary' : 'primary' }
                        content={ isFollowed ? 'Unfollow' : 'Follow' }
                        onClick={ () => setIsFollowed(!isFollowed) }
                        className='follow-button'
                    />
                }
            </div>
            <div className='followers-info'>
                <h2>{ username ? 'Account Information' : 'Follows' }</h2>
                <div className="tabbed-content">
                    <ul role="tablist">
                        { username &&
                            <li role="presentation">
                                <h3>
                                    <a
                                        role="tab"
                                        href="#my-profile"
                                        id="tab3"
                                        aria-selected={ activeFollowTab === 3 }
                                        onClick={ event => handleFollowTabClick(event, 3) }
                                    >
                                        My profile
                                    </a>
                                </h3>
                            </li>
                        }
                        <li role="presentation">
                            <h3>
                                <a
                                    role="tab"
                                    href="#description-section"
                                    id="tab1"
                                    aria-selected={ activeFollowTab === 1 }
                                    onClick={ event => handleFollowTabClick(event, 1) }
                                >
                                    Follows
                                </a>
                            </h3>
                        </li>
                        <li role="presentation">
                            <h3>
                                <a
                                    role="tab"
                                    href="#followers"
                                    id="tab2"
                                    aria-selected={ activeFollowTab === 2 }
                                    onClick={ event => handleFollowTabClick(event, 2) }
                                >
                                    Followers
                                </a>
                            </h3>
                        </li>
                    </ul>
                    { username &&
                        <section
                            role="tabpanel"
                            id="my-profile"
                            aria-labelledby="tab3"
                            hidden={ activeFollowTab !== 3 }
                            className='my-profile'
                        >
                            <div className='username'>
                                <h4>Username</h4>
                                { isChangingUsername ? (
                                    <>
                                        <ICFTextInput
                                            name='username'
                                            id='username'
                                            value={ newUsername }
                                            onChange={ (event: ChangeEvent<HTMLInputElement>) => setNewUsername(event.target.value) }
                                        />
                                        <button
                                            type='button'
                                            title='Accept'
                                            onClick={ applyNewUsername }
                                            className='accept'
                                        >
                                            <Icon type='tick-pink' alt='Accept' />
                                        </button>
                                        <button
                                            type='button'
                                            title='Cancel'
                                            onClick={ () => setIsChagingUsername(false) }
                                            className='cancel'
                                        >
                                            <Icon type='x-pink' alt='Cancel' />
                                        </button>
                                    </>
                                ) : (
                                    <div>
                                        { username }
                                        <button title='Change username' onClick={ startChanginUsername }>
                                            <Icon type='pencil' alt='Change username' />
                                        </button>
                                    </div>
                                ) }
                            </div>

                            <div className='email'>
                                <h4>Email</h4>
                                <a href='mailto:SuperSteve@gmail.com'>SuperSteve@gmail.com</a>
                            </div>
                            <ICFButton buttonType='secondary' content='Change password' className='change-password' />
                        </section>
                    }
                    <section
                        role="tabpanel"
                        id="follows"
                        aria-labelledby="tab1"
                        hidden={ activeFollowTab !== 1 }
                    >
                        <ul className='grid-list profile-list'>
                            { follows.map(follow =>
                            (
                                <li>
                                    <NavLink to={ profilePagePath }>
                                        <ImageWithDescription
                                            key={ `${follow.name} avatar` }
                                            src={ follow.avatar }
                                            alt={ `${follow.name} avatar` }
                                            description={ follow.name }
                                            imageHeight={ '107px' }
                                            circled
                                        />
                                    </NavLink>
                                </li>
                            )) }
                        </ul>
                    </section>
                    <section
                        role="tabpanel"
                        id="followers"
                        aria-labelledby="tab2"
                        hidden={ activeFollowTab !== 2 }
                    >
                        <ul className='grid-list profile-list'>
                            { followers.map(follower =>
                            (
                                <li>
                                    <NavLink to={ profilePagePath }>
                                        <ImageWithDescription
                                            key={ `${follower.name} avatar` }
                                            src={ follower.avatar }
                                            alt={ `${follower.name} avatar` }
                                            description={ follower.name }
                                            imageHeight={ '107px' }
                                            circled
                                        />
                                    </NavLink>
                                </li>
                            )) }
                        </ul>
                    </section>
                </div>
            </div>
            <div className="assets-info">
                <h2>Assets</h2>
                <div className="tabbed-content">
                    <ul role="tablist">
                        <li role="presentation">
                            <h2>
                                <a
                                    role="tab"
                                    href="#user-assets"
                                    id="tab1"
                                    aria-selected={ activeAssetTab === 1 }
                                    onClick={ event => handleAssetTabClick(event, 1) }
                                >
                                    My assets
                                </a>
                            </h2>
                        </li>
                        <li role="presentation">
                            <h2>
                                <a
                                    role="tab"
                                    href="#favourites"
                                    id="tab2"
                                    aria-selected={ activeAssetTab === 2 }
                                    onClick={ event => handleAssetTabClick(event, 2) }
                                >
                                    Favourites
                                </a>
                            </h2>
                        </li>
                    </ul>
                    <section
                        role="tabpanel"
                        id="user-assets"
                        aria-labelledby="tab1"
                        hidden={ activeAssetTab !== 1 }
                    >
                        { userAssets.length === 0 ? (
                            <LoadingComponent />
                        ) : (
                            <ul className='grid-list assets-list'>
                                { userAssets.map(asset =>
                                (
                                    <li>
                                        <NavLink to={ assetPagePath('random-id') }>

                                            <ImageWithDescription
                                                key={ `${asset.title} preview` }
                                                src={ asset.mainImage }
                                                alt={ `${asset.title} preview` }
                                                description={ asset.title }
                                                imageHeight='150px'
                                            />
                                        </NavLink>
                                    </li>
                                )) }
                            </ul>
                        ) }
                    </section>
                    <section
                        role="tabpanel"
                        id="favourites"
                        aria-labelledby="tab2"
                        hidden={ activeAssetTab !== 2 }
                    >
                        { favouriteAssets.length === 0 ? (
                            <LoadingComponent />
                        ) : (
                            <ul className='grid-list assets-list'>
                                { favouriteAssets.map(asset =>
                                (
                                    <li>
                                        <NavLink to={ assetPagePath('random-id') }>
                                            <ImageWithDescription
                                                key={ `${asset.title} preview` }
                                                src={ asset.mainImage }
                                                alt={ `${asset.title} preview` }
                                                description={ asset.title }
                                                imageHeight='150px'
                                            />
                                        </NavLink>
                                    </li>
                                )) }
                            </ul>
                        ) }

                    </section>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
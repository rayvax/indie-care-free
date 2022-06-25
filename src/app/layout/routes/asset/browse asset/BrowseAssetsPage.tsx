import React, { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useState } from 'react';
import Button from '../../../../common/buttons/Button';
import ICFCheckbox from '../../../../common/forms/ICFCheckbox';
import ICFTextInput from '../../../../common/forms/ICFTextInput';
import Icon from '../../../../common/Icon';
import LoadingComponent from '../../../../common/LoadingComponent';
import Tag from '../../../../common/tag/Tag';
import { BrowseAsset, getMockBrowseAssets } from '../../../../models/asset';
import BrowseAssetComponent from './BrowseAsset';

interface ExpandStatus
{
    categories: boolean;
    licenses: boolean;
    tags: boolean;
}
const defaultExpandStatus: ExpandStatus = { categories: false, licenses: false, tags: false };

const categories = ['3D', '2D', 'Music', 'Sounds', 'Scripts', 'Textures',];

const licenses = ["CC0", "CC-BY 4.0", "CC-BY-SA 4.0", "CC-BY 3.0",];

function BrowseAssetsPage()
{
    const [assets, setAssets] = useState<BrowseAsset[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [expandStatus, setExpandStatus] = useState<ExpandStatus>(defaultExpandStatus);

    const [filterTags, setFilterTags] = useState<string[]>([]);
    const [currentTag, setCurrentTag] = useState<string>('');

    useEffect(() =>
    {
        getMockBrowseAssets(16).then((data) =>
        {
            setAssets(data);
        }
        ).catch((error) =>
        {
            console.log(error);
        }).finally(() => setIsLoading(false));
    }, []);

    function handleTagKeyDown(event: KeyboardEvent)
    {
        if (event.key !== 'Enter')
            return;

        if (!filterTags.some((tag) => tag === currentTag))
        {
            setFilterTags([...filterTags, currentTag]);
            setCurrentTag('');
        }
    }
    function removeTag(targetTag: string)
    {
        setFilterTags(filterTags.filter(tag => tag !== targetTag));
    }
    function ToggleExpandStatus(section: keyof ExpandStatus)
    {
        const prevStatus = expandStatus[section];
        setExpandStatus({ ...expandStatus, [section]: !prevStatus });
    }
    function handleSubmitFilter(event: FormEvent)
    {
        //mock filter
        event.preventDefault();

        setIsLoading(true);
        getMockBrowseAssets(16).then((data) =>
        {
            setAssets(data);
        }
        ).catch((error) =>
        {
            console.log(error);
        }).finally(() => setIsLoading(false));
    }

    return (
        <>
            <h1 className='visually-hidden'>Browse Assets</h1>
            <div className='browse-assets'>
                <div className='assets-area'>
                    { isLoading ? (
                        <LoadingComponent title='Loading assets...' />
                    ) : (
                        <ul className='assets-list'>
                            { assets.map(asset =>
                            (
                                <li key={ asset.title }>
                                    <BrowseAssetComponent asset={ asset } />
                                </li>
                            )) }
                        </ul>
                    ) }
                </div>
                <div className='filter'>
                    <h2>Filter by</h2>
                    <form onSubmit={ handleSubmitFilter }>
                        <ul>
                            <li className='categories'>
                                <div className='filter-title'>
                                    <h3>Categories</h3>
                                    <button
                                        type='button'
                                        title={ expandStatus.categories ? 'hide' : 'expand' }
                                        onClick={ () => ToggleExpandStatus('categories') }
                                    >
                                        <Icon type={ expandStatus.categories ? 'minus' : 'plus' } />
                                    </button>
                                </div>
                                { expandStatus.categories &&
                                    <ul>
                                        { categories.map(category =>
                                        (
                                            <li>
                                                <ICFCheckbox
                                                    key={ category }
                                                    label={ category }
                                                    name={ category }
                                                    id={ category + ' checkbox' }
                                                />
                                            </li>
                                        )) }
                                    </ul>
                                }
                            </li>
                            <li className='licenses'>
                                <div className='filter-title'>
                                    <h3>Licenses</h3>
                                    <button
                                        type='button'
                                        title={ expandStatus.licenses ? 'hide' : 'expand' }
                                        onClick={ () => ToggleExpandStatus('licenses') }
                                    >
                                        <Icon type={ expandStatus.licenses ? 'minus' : 'plus' } />
                                    </button>
                                </div>
                                { expandStatus.licenses &&
                                    <ul>
                                        { licenses.map(license =>
                                        (
                                            <li>
                                                <ICFCheckbox
                                                    key={ license }
                                                    label={ license }
                                                    name={ license }
                                                    id={ license + ' checkbox' }
                                                />
                                            </li>
                                        )) }
                                    </ul>
                                }
                            </li>
                            <li className='tags'>
                                <div className='filter-title'>
                                    <h3>Tags</h3>
                                    <button
                                        type='button'
                                        title={ expandStatus.tags ? 'hide' : 'expand' }
                                        onClick={ () => ToggleExpandStatus('tags') }
                                    >
                                        <Icon type={ expandStatus.tags ? 'minus' : 'plus' } />
                                    </button>
                                </div>
                                { expandStatus.tags && (
                                    <>
                                        <ICFTextInput
                                            onKeyDown={ handleTagKeyDown }
                                            name='tag'
                                            onChange={ (event: ChangeEvent<HTMLInputElement>) => setCurrentTag(event.target.value) }
                                            value={ currentTag }
                                        />
                                        <Tag.List>
                                            { filterTags.map((tag) =>
                                            (
                                                <Tag key={ tag } content={ tag } closable onCloseClick={ removeTag } />
                                            )) }
                                        </Tag.List>
                                    </>
                                ) }
                            </li>
                        </ul>
                        <Button type='submit' content='Apply filter' />
                    </form>
                </div>
            </div>
        </>
    );
}

export default BrowseAssetsPage;
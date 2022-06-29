import { FormEvent, useEffect, useState } from 'react';
import ICFButton from '../../../../common/buttons/ICFButton';
import ICFCheckbox from '../../../../common/forms/ICFCheckbox';
import TagListInput from '../../../../common/forms/TagListInput';
import Icon from '../../../../common/Icon';
import LoadingComponent from '../../../../common/LoadingComponent';
import { BrowseAsset, getMockBrowseAssets } from '../../../../models/asset';
import { icfCategories, icfCopyrights } from '../../../../utils/constants/icf-constants';
import BrowseAssetComponent from './BrowseAsset';

interface ExpandStatus
{
    categories: boolean;
    licenses: boolean;
    tags: boolean;
}
const defaultExpandStatus: ExpandStatus = { categories: false, licenses: false, tags: false };

function BrowseAssetsPage()
{
    const [assets, setAssets] = useState<BrowseAsset[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [expandStatus, setExpandStatus] = useState<ExpandStatus>(defaultExpandStatus);

    function refreshAssets()
    {
        setIsLoading(true);
        getMockBrowseAssets(16).then((data) =>
        {
            setAssets(data);
        })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    useEffect(refreshAssets, []);

    function ToggleExpandStatus(section: keyof ExpandStatus)
    {
        const prevStatus = expandStatus[section];
        setExpandStatus({ ...expandStatus, [section]: !prevStatus });
    }
    function handleSubmitFilter(event: FormEvent)
    {
        //mock filter
        event.preventDefault();
        refreshAssets();
    }

    return (
        <>
            <h1 className='visually-hidden'>Browse Assets</h1>
            <div className='browse-assets'>
                <div className='assets-area'>
                    { isLoading ? (
                        <LoadingComponent title='Loading assets...' />
                    ) : (
                        <ul className='grid-list'>
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
                                        { icfCategories.map(category =>
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
                                        { icfCopyrights.map(license =>
                                        (
                                            <li>
                                                <ICFCheckbox
                                                    key={ license.title }
                                                    label={ license.title }
                                                    name={ license.title }
                                                    id={ license.title + ' checkbox' }
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
                                { expandStatus.tags &&
                                    <TagListInput name='tag-list' />
                                }
                            </li>
                        </ul>
                        <ICFButton type='submit' content='Apply filter' />
                    </form>
                </div>
            </div>
        </>
    );
}

export default BrowseAssetsPage;
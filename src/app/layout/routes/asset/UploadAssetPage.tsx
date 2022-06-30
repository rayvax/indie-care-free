import { useState } from 'react';
import ICFButton from '../../../common/buttons/ICFButton';
import Carousel from '../../../common/Carousel';
import ICFCheckbox from '../../../common/forms/ICFCheckbox';
import ICFTextArea from '../../../common/forms/ICFTextArea';
import ICFTextInput from '../../../common/forms/ICFTextInput';
import TagListInput from '../../../common/forms/TagListInput';
import Icon from '../../../common/Icon';
import { icfCategories } from '../../../utils/constants/icf-constants';
import { getRandomAssetImagePath } from '../../../utils/paths/imagePaths';
import { assetPagePath } from '../../../utils/paths/routerPaths';

let assetCounter = 1;

function UploadAssetPage()
{
    const [uploadedAssets, setUploadedAssets] = useState<string[]>([]);
    const [coverImagePath, setCoverImagePath] = useState<string | null>(null);
    const [screenshots, setScreenshots] = useState<string[]>([]);

    function addAsset()
    {
        if (uploadedAssets.length >= 20)
            return;

        setUploadedAssets([...uploadedAssets, `asset${assetCounter++}.zip`]);
    }

    function uploadCoverImage()
    {
        setCoverImagePath(getRandomAssetImagePath());
    }

    function addScreenshot()
    {
        setScreenshots([...screenshots, getRandomAssetImagePath()]);
    }

    return (
        <div className='upload-asset-page'>
            <h1>Upload new asset</h1>
            <div className='main-info-area'>
                <form action={ assetPagePath('random-id') }>
                    <h2 className='visually-hidden'>Main information</h2>
                    <ICFTextInput label='Title' />

                    <h3>Categories</h3>
                    <ul className='categories-list'>
                        { icfCategories.map(category =>
                        (
                            <li key={ category.name } >
                                <ICFCheckbox
                                    id={ category.name }
                                    name={ category.name }
                                    label={ category.title }
                                />
                            </li>
                        )) }
                    </ul>

                    <TagListInput name='tag-list' label='Tags' />

                    <ICFTextInput name='license' label='License' />

                    <h2>Uploads</h2>
                    <ICFButton type='button' content='Upload asset' onClick={ addAsset } />
                    { uploadedAssets.length > 0 &&
                        <>
                            <h3 className='uploaded-assets-list-title'>Uploaded assets list:</h3>
                            <ul className='uploaded-assets'>
                                { uploadedAssets.map(asset => <li>{ asset }</li>) }
                            </ul>
                        </>
                    }


                    <h2>Details</h2>
                    <ICFTextArea label='Description' />

                    <ICFButton type='submit' content='Save & view page' />
                </form>
            </div>
            <div className='screenshot-area'>
                <div className='cover-image-container'>
                    { coverImagePath ? (
                        <button type='button'
                            title='change-cover'
                            onClick={ uploadCoverImage }
                        >
                            <img src={ coverImagePath } alt="cover" onClick={ uploadCoverImage } />
                        </button>
                    ) : (
                        <>
                            <Icon type='image-placeholder' />
                            <ICFButton
                                content='Upload Cover Image'
                                type='button'
                                className='upload-cover'
                                onClick={ uploadCoverImage }
                            />
                        </>
                    ) }
                </div>
                <h2>Screenshots</h2>
                <p>Screenshots will appear on&nbsp;your asset&rsquo;s page. Optional but highly recommended. Upload 3&nbsp;to&nbsp;5&nbsp;for best results.</p>
                { screenshots.length > 0 &&
                    <Carousel itemsInPage={ 3 } itemHeight={ '90px' } buttonsOnBottom>
                        { screenshots.map((screenshot, index) =>
                        (
                            <img
                                key={ `screenshot${index}` }
                                src={ screenshot }
                                alt={ 'screenshot' }
                            />
                        )) }
                    </Carousel>
                }
                <ICFButton
                    content='Add screenshots'
                    className='screenshot-button'
                    buttonType='secondary'
                    onClick={ addScreenshot }
                    type='button'
                />
            </div>
        </div>
    );
}

export default UploadAssetPage;
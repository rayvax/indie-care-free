import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BlockWithSideContent from '../../common/BlockWithSideContent';
import ICFButton from '../../common/buttons/ICFButton';
import Card from '../../common/card/Card';
import Carousel from '../../common/Carousel';
import ImageWithDescription from '../../common/ImageWithDescription';
import { icfCategories, icfCopyrights } from '../../utils/constants/icf-constants';
import { getImagePath } from '../../utils/paths/imagePaths';
import { browseAssetsPagePath } from '../../utils/paths/routerPaths';

function NewbiePage()
{
    const navigate = useNavigate();

    return (
        <div className="newbie-page">
            <h1 className='visually-hidden'>New to IndieCareFree?</h1>
            <BlockWithSideContent
                sideImgSrc={ getImagePath('newbie-page/newbie1.jpg') }
                sideImgAlt='Background'
                contentProportion={ 0.55 }
                contentSide='left'
            >
                <h2>How to&nbsp;start your gamedev journey?</h2>
                <p className='emphasis-paragraph extra-emphasis'>
                    <strong>Here is&nbsp;some tips if&nbsp;you are new to&nbsp;IndieCareFree</strong>
                </p>
                <p>Find the right tools, extensions, and art packs to&nbsp;accelerate your workflow. Whether you&rsquo;re an&nbsp;experienced developer or&nbsp;new to&nbsp;coding, the IndieCareFree can help you stay focused on&nbsp;the fun part of&nbsp;game creation.</p>
                <p>And all these assets are for free! Just make sure you match the copyright rules</p>

            </BlockWithSideContent>
            <div className='motivational-video-block'>
                <img
                    className='video-image'
                    src={ getImagePath('newbie-page/gamedev-dream.png') }
                    alt="gamedev dream video"
                />
                <div className='text-content'>
                    <h2>How making indie games changed my&nbsp;life</h2>
                    <p>
                        David Wehle, the creator of&nbsp;The First Tree, leveraged the Asset Store to&nbsp;become a&nbsp;full-time indie developer. His story is&nbsp;now shared by&nbsp;thousands of&nbsp;other developers who have found similar success crafting their projects with time-saving content from the Asset Store.
                    </p>
                    <p>
                        As&nbsp;David explains, &laquo;I&nbsp;make games for a&nbsp;living... which blows my&nbsp;mind since I&rsquo;m horrible at&nbsp;coding and am&nbsp;self-taught when it&nbsp;comes to&nbsp;art and design. I&nbsp;hope&nbsp;I can inspire you to&nbsp;start, finish, and market your game&nbsp;&mdash; because, trust&nbsp;me, it&rsquo;s worth&nbsp;it.&raquo;
                    </p>
                </div>
            </div>
            <div>
                <h2>Choose assets by&nbsp;categories</h2>
                <Carousel itemsInPage={ 4 } itemHeight={ '250px' }>
                    { icfCategories.map(category =>
                    (
                        <NavLink to={ browseAssetsPagePath } key={ category.title }>
                            <Card>
                                <Card.Image src={ category.imagePath } alt={ category.title } />
                            </Card>
                        </NavLink>
                    )) }
                </Carousel>
            </div>

            <BlockWithSideContent
                sideImgSrc={ getImagePath('newbie-page/newbie2.jpg') }
                sideImgAlt='Background'
                contentProportion={ 0.55 }
                contentSide='left'
            >
                <h2>All that copyright rules seems overwhelming?</h2>
                <p className='emphasis-paragraph'><strong>Use CC0 for care free game development</strong></p>
                <p>The person who associated a&nbsp;work with this deed has dedicated the work to&nbsp;the public domain by&nbsp;waiving all of&nbsp;his or&nbsp;her rights to&nbsp;the work worldwide under copyright law, including all related and neighboring rights, to&nbsp;the extent allowed by&nbsp;law.</p>
                <p>You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See Other Information below.</p>
                <ICFButton
                    type='button'
                    content="Let's go!"
                    onClick={ () => navigate(browseAssetsPagePath) }
                />
            </BlockWithSideContent>
            <div>
                <h2>Or&nbsp;learn about other copyright rules</h2>
                <ul className='grid-list copyrights-list'>
                    { icfCopyrights.map(copyright =>
                    (
                        <li key={ copyright.title }>
                            <a href={ copyright.href }>
                                <ImageWithDescription
                                    src={ copyright.imagePath }
                                    alt={ copyright.title }
                                    description={ copyright.title } />
                            </a>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
}

export default NewbiePage;
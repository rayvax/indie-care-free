import React, { CSSProperties } from 'react';
import ArrowButton from '../buttons/ArrowButton';

interface CarouselProps extends React.HTMLAttributes<HTMLElement>
{
    elementsInPage: number;
}

function Carousel({ elementsInPage, children, ...props }: CarouselProps) 
{
    const [activePage, setActivePage] = React.useState(0);
    const viewport = React.useRef<HTMLDivElement>(null);

    const childrenArray = React.Children.toArray(children);
    const pagesCount = Math.ceil(childrenArray.length / elementsInPage);

    //dots at the bottom indicating page
    const dots = getPageDots(activePage, pagesCount, moveCarouselContentToPage);

    function moveCarouselContentToPage(destinationPage: number)
    {
        if (destinationPage < 0 || destinationPage >= pagesCount) //out of bound
            return;

        if (viewport.current == null)
            return;

        const carouselContent: HTMLUListElement | null = viewport.current.querySelector('.carousel-content');

        if (carouselContent == null || carouselContent.lastElementChild == null)
            return;

        //calculate new content translate
        const contentComputedStyles = getComputedStyle(carouselContent);
        const gap: number = Number(contentComputedStyles.getPropertyValue('--items-gap'));
        const moveWidth = viewport.current.clientWidth + gap;
        let contentTranslate = -moveWidth * destinationPage;

        //checkTranslateBounds
        const lastChild = carouselContent.lastElementChild;
        const maxTranslate = -(lastChild.getBoundingClientRect().right
            - carouselContent.getBoundingClientRect().left - moveWidth);

        contentTranslate = Math.min(
            0,
            Math.max(
                maxTranslate - gap,
                contentTranslate,
            ),
        );

        carouselContent.style.setProperty('--carousel-content-position-x', contentTranslate.toString());
        setActivePage(destinationPage);
    }

    const contentProperty = { '--elements-in-page': elementsInPage } as CSSProperties;

    return (
        <div { ...props } className='carousel'>
            { activePage > 0 &&
                <ArrowButton direction='left' isFilled onClick={ () => moveCarouselContentToPage(activePage - 1) } />
            }

            <div className='viewport' ref={ viewport }>
                <ul className='carousel-content' style={ contentProperty }>
                    { React.Children.map(children, (child, index) => (
                        <li key={ index } >
                            { child }
                        </li>
                    )) }
                </ul>
            </div>


            { activePage < pagesCount - 1 &&
                <ArrowButton direction='right' isFilled onClick={ () => moveCarouselContentToPage(activePage + 1) } />
            }

            <ul className='page-counter'>
                { dots }
            </ul>
        </div>
    );
}

function getPageDots(activePage: number, pagesCount: number, setActivePage: (value: number) => void)
{
    let dots: JSX.Element[] = [];

    for (let i = 0; i < activePage; i++)
    {
        dots.push(<li key={ i } onClick={ () => setActivePage(i) }></li>);
    }
    dots.push(<li key={ activePage } className='active-dot'></li>);
    for (let i = activePage + 1; i < pagesCount; i++)
    {
        dots.push(<li key={ i } onClick={ () => setActivePage(i) }></li>);
    }

    return dots;
}

export default Carousel;
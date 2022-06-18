import * as React from 'react';
import ArrowButton from '../buttons/ArrowButton';

interface CarouselProps extends React.HTMLAttributes<HTMLElement>
{
    elementsInPage: number;
}

function Carousel({ elementsInPage, children, ...props }: CarouselProps) 
{
    const childrenArray = React.Children.toArray(children);

    const [activePage, setActivePage] = React.useState(0);
    const pagesCount = Math.ceil(childrenArray.length / elementsInPage);

    //slice children into pages
    let childrenInPages: (React.ReactChild | React.ReactFragment | React.ReactPortal)[][] = [];
    for (let i = 0; i < pagesCount; i++)
    {
        childrenInPages.push(childrenArray.slice(i * elementsInPage, (i + 1) * elementsInPage));
    }

    //add children at the last page so they have const size
    let remainingCount = childrenInPages[0].length - childrenInPages[childrenInPages.length - 1].length;
    while (remainingCount > 0)
    {
        childrenInPages[childrenInPages.length - 1].push(<div></div>);
        remainingCount--;
    }

    //dots at the bottom indicating page
    let dots: React.ReactElement[] = [];
    for (let i = 0; i < activePage; i++)
    {
        dots.push(<li key={ i } onClick={ () => setActivePage(i) }></li>);
    }
    dots.push(<li key={ activePage } className='active-dot'></li>);
    for (let i = activePage + 1; i < pagesCount; i++)
    {
        dots.push(<li key={ i } onClick={ () => setActivePage(i) }></li>);
    }

    return (
        <div { ...props } className='carousel'>
            { activePage > 0 &&
                <ArrowButton direction='left' isFilled onClick={ () => setActivePage(activePage - 1) } />
            }

            <div className='carousel-content'>
                { childrenInPages[activePage] }
            </div>

            { activePage < pagesCount - 1 &&
                <ArrowButton direction='right' isFilled onClick={ () => setActivePage(activePage + 1) } />
            }

            <ul className='bottom-dots'>
                { dots }
            </ul>
        </div>
    );
}

export default Carousel;
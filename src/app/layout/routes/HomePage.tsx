import * as React from 'react';
import Carousel from '../../common/carousels/Carousel';


function HomePage()
{
    return (
        <>
            <div>
                <h2>Popular this week</h2>
                <Carousel elementsInPage={ 1 }>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'yellowgreen', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rebeccapurple', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                </Carousel>
            </div>

            <div>
                <h2>Browse by categories</h2>
                <Carousel elementsInPage={ 5 }>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'yellowgreen', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rebeccapurple', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                </Carousel>
            </div>
            <div>
                {/* new to IndieCareFree */ }
            </div>
            <div>
                <h2>Top rated publishers</h2>
                <Carousel elementsInPage={ 5 }>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'yellowgreen', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rebeccapurple', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'yellowgreen', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rebeccapurple', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'yellowgreen', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rebeccapurple', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'yellowgreen', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rebeccapurple', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'rosybrown', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'royalblue', height: '200px' } }></div>
                    <div style={ { backgroundColor: 'aquamarine', height: '200px' } }></div>
                </Carousel>
            </div>
        </>
    );
}

export default HomePage;
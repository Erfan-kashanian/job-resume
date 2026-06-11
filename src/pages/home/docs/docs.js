import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './docs.css'
import img11 from './images/img11.jpg'
import img22 from './images/img22.jpg'
import img33 from './images/img33.jpg'
import img44 from './images/img44.jpg'
const Example = () => {
    const images = [
        img11,
        img22,
        img33,
        img44,
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    
                </div>
            </div>
            
        </Slide>
    );
};

export default Example;
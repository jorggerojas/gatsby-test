import React from 'react';
import { StyledFrame } from './StyledFrame';

/**
 * Frame component is a HTML iframe tag
 * @param {String} src Video source of the frame
 * @param {String} title Title's frame
 */
const Frame = ({ src, title }) => {
    return (
        <StyledFrame>
            <iframe
                src={src}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </StyledFrame>
    );
}

export default Frame;
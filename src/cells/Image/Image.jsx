import React from 'react';
import { StyledImage } from './StyledImage';

/**
 * Component Image creates an image object with the source provided
 * @param {string} alt Accesibility prop to display text if the image can't be displayed
 * @param {string} src Soruce of the image (URL, path, data...)
 */
const Image = ({ alt, src, ...props }) => {
    return <StyledImage alt={alt} src={src} {...props} />;
};

export default Image;
import React from 'react';
import { StyledImage } from './StyledImage';

/**
 * Component Image creates an image object with the source provided
 * @param {String} alt Accesibility prop to display text if the image can't be displayed
 * @param {String} src Soruce of the image (URL, path, data...)
 * @param {Object} props HTML attributes for image tag
 */
const Image = ({ alt, src, ...props }) => {
    return <StyledImage alt={alt} src={src} {...props} />;
};

export default Image;
import React from 'react';
import { StyledImage } from './StyledImage';

/**
 * Component Image creates an image object with the source provided
 * @param {String} alt Accesibility prop to display text if the image can't be displayed
 * @param {String} src Soruce of the image (URL, path, data...)
 * @param {boolean} post Flag to put padding in the image for long post
 * @param {Object} props HTML attributes for image tag
 */
const Image = ({ alt, src, post = false, ...props }) => {
    return <StyledImage alt={alt} src={src} post={post.toString()} {...props} />;
};

export default Image;
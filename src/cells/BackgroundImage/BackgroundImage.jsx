import React from 'react';
import StyledImg from './StyledImg';

/**
 * BackgroundImage is an image with cover properties
 * @param {Object} rest HTML attributes for image tag 
*/
 const BackgroundImage = ({ ...rest }) => {
  return <StyledImg {...rest} />;
};

export default BackgroundImage;

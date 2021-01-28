import React from 'react';
import StyledAuthorData from './StyledAuthorData';
import padding from '../../utils/padding';

const AuthorData = ({ children }) => {
    return (
        <StyledAuthorData css={padding({ left: 'md' })}>
            {children}
        </StyledAuthorData>
    );
};

export default AuthorData;
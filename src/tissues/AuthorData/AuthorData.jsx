import React from 'react';
import StyledAuthorData from './StyledAuthorData'

const AuthorData = ({ children }) => {
    return (
        <StyledAuthorData>
            {children}
        </StyledAuthorData>
    );
};

export default AuthorData;
import React from 'react';
import StyledAuthorDescription from './StyledAuthorDescription';
import { Avatar } from '../../cells/Avatar';
import { Paragraph } from '../../cells/Paragraph';
import { AuthorData } from '../../tissues/AuthorData';
import { css } from 'styled-components';
import padding from '../../utils/padding';

const AuthorDescription = () => {
    return (
        <StyledAuthorDescription css={css`${padding({ left: 'md' })}`}>
            <Avatar
                hide="xsm"
                src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                alt="avatar"
            />
            <AuthorData display="flex" direction="column">
                <Paragraph bold="400" lineHeight="0.9">Clara Gonzalez</Paragraph>
                <Paragraph color="darkGray">CEO at Company Name</Paragraph>
            </AuthorData>
        </StyledAuthorDescription>
    );
};

export default AuthorDescription;
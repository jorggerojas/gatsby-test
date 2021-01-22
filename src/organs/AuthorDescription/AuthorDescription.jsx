import React from 'react';
import StyledAuthorDescription from './StyledAuthorDescription';
import { Avatar } from '../../cells/Avatar';
import { Paragraph } from '../../cells/Paragraph';
import StyledPostDescription from '../../tissues/PostDescription/StyledPostDescription';
import { css } from 'styled-components';
import padding from '../../utils/padding';

const AuthorDescription = () => {
    return (
        <StyledAuthorDescription margin="2vw" css={css`${padding({ top: 'lg' })}`}>
            <Avatar
                hide="xsm"
                src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                alt="avatar"
            />
            <StyledPostDescription display="flex" flexDirection="column">
                <Paragraph bold="550">Clara Gonzalez</Paragraph>
                <Paragraph color="darkGray">CEO at Company Name</Paragraph>
            </StyledPostDescription>
        </StyledAuthorDescription>
    );
};

export default AuthorDescription;
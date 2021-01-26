import React from 'react';
import StyledAuthorDescription from './StyledAuthorDescription';
import { Avatar } from '../../cells/Avatar';
import { Paragraph } from '../../cells/Paragraph';
import StyledPostDescription from '../../tissues/PostDescription/StyledPostDescription';
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
            <StyledPostDescription display="flex" direction="column">
                <Paragraph bold="400" lineHeight="0.9">Clara Gonzalez</Paragraph>
                <Paragraph color="darkGray">CEO at Company Name</Paragraph>
            </StyledPostDescription>
        </StyledAuthorDescription>
    );
};

export default AuthorDescription;
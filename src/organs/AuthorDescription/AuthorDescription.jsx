import React from 'react';
import StyledAuthorDescription from './StyledAuthorDescription';
import { Avatar } from '../../cells/Avatar';
import { Paragraph } from '../../cells/Paragraph';
import { AuthorData } from '../../tissues/AuthorData';
import padding from '../../utils/padding';

const AuthorDescription = () => {
    return (
        <StyledAuthorDescription css={padding({ left: 'md' })}>
            <Avatar
                hide="xs"
                src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                alt="avatar"
            />
            <AuthorData display="flex" direction="column">
                <Paragraph bold="400" family="DM Sans" lineHeight="0.9"
                    css={padding({ bottom: 'micro' })}>Clara Gonzalez</Paragraph>
                <Paragraph lineHeight="0.694" family="DM Sans" size="xs" color="darkGray">CEO at Company Name</Paragraph>
            </AuthorData>
        </StyledAuthorDescription>
    );
};

export default AuthorDescription;
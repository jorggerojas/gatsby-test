import React from 'react';
import { StyledAuthorContainer, TopPage } from './StyledAuthorContainer';
import Avatar from '../../cells/Avatar';
import Spacer from '../../cells/Spacer';
import Title from '../../cells/Title';
import Paragraph from '../../cells/Paragraph';
import padding from '../../utils/padding';

/**
 * AuthorContainer is a wrapper with Author's data for Authors Page
 * @param {String} name Author's name
 * @param {String} image Author's profile image
 */
const AuthorContainer = ({ name = "Loading...", image = "..." }) => {
    return (
        <StyledAuthorContainer>
            <TopPage css={padding({ top: 'sm' })}>
                <Avatar
                    src={image}
                    alt={`Img ${image}`}
                    size="large"
                />
                <Spacer size="lg" />
                <Title level="D3">{name}</Title>
                <Spacer size="md" />
                <Paragraph size="sm" color="mutedGray">
                    CEO at Company name
                </Paragraph>
            </TopPage>
        </StyledAuthorContainer>
    );
}

export default AuthorContainer;
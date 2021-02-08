import React from 'react';
import { StyledAuthorContainer, TopPage } from './StyledAuthorContainer';
import Avatar from '../../cells/Avatar';
import Spacer from '../../cells/Spacer';
import Title from '../../cells/Title';
import Paragraph from '../../cells/Paragraph';
import padding from '../../utils/padding';

/**
 * AuthorContainer is a wrapper with Author's data for Authors Page
 */
const AuthorContainer = () => {
    return (
        <StyledAuthorContainer>
            <TopPage css={padding({ top: 'sm' })}>
                <Avatar
                    src="https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"
                    alt="Carla Gonzalez foto"
                    size="large"
                />
                <Spacer size="lg" />
                <Title level="D3">Clara González</Title>
                <Spacer size="md" />
                <Paragraph size="sm" color="mutedGray">
                    CEO at Company name
                </Paragraph>
            </TopPage>
        </StyledAuthorContainer>
    );
}

export default AuthorContainer;
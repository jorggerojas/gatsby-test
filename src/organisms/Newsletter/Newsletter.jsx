import React from 'react';
import {
    StyledNewsletter,
    StyledNewsletterTitleContainer,
    StyledNewsletterInputButtonContainer,
    StyledNewsletterInputContainer
}
    from './StyledNewsletter';
import { Title } from '../../cells/Title';
import { Input } from '../../cells/Input';
import { Paragraph } from '../../cells/Paragraph';
import { Button } from '../../cells/Button';
import padding from '../../utils/padding';

const Newsletter = () => {
    return (
        <StyledNewsletter>
            <StyledNewsletterTitleContainer>
                <Title level="D3" lineHeight="4.3rem" css={padding({ bottom: 'md' })}>Get our Insights.</Title>
                <Paragraph hide="md" size="lg">
                    Subscribe to our biweekly newsletter with the best in product management, startups and digital transformation
                </Paragraph>
            </StyledNewsletterTitleContainer>
            <StyledNewsletterInputButtonContainer>
                <StyledNewsletterInputContainer>
                    <Input label="Your email" type="mail" />
                    <Paragraph size="sm" lineHeight="1.25" color="mutedGray">
                        By signing up, you accept the terms of Muir Privacy Policy
                    </Paragraph>
                </StyledNewsletterInputContainer>
                <div>
                    <Button colors={"primary"} label="Subscribe" size="large" />
                </div>
            </StyledNewsletterInputButtonContainer>
        </StyledNewsletter>
    );
};

export default Newsletter;
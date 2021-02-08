import React from 'react';
import {
    StyledNewsletter,
    StyledNewsletterTitleContainer,
    StyledNewsletterInputButtonContainer,
    StyledNewsletterInputContainer,
    StyledNewsletterButtonDiv
}
    from './StyledNewsletter';
import Title from '../../cells/Title';
import Input from '../../cells/Input';
import Paragraph from '../../cells/Paragraph';
import Button from '../../cells/Button';
import padding from '../../utils/padding';

/**
 * Newsletter component wrap an input, button and text for subscription
 * @param {String} title Title of the newsletter
 * @param {String} bottom Padding bottom of the title
 */
const Newsletter = ({ title = "Get our Insights.", bottom = 'sm', download = false, hide = "md" }) => {
    return (
        <StyledNewsletter download={download.toString()}>
            <StyledNewsletterTitleContainer>
                <Title level="D3" lineHeight="4.3rem" css={padding({ bottom: bottom })}>
                    {title}
                </Title>
                <Paragraph hide={hide} size="lg">
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
                <StyledNewsletterButtonDiv>
                    <Button colors={"primary"} label="Subscribe" size="large" />
                </StyledNewsletterButtonDiv>
            </StyledNewsletterInputButtonContainer>
        </StyledNewsletter>
    );
};

export default Newsletter;
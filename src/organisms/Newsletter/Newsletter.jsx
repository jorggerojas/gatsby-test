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
        <StyledNewsletter download={download.toString()} data-scroll>
            <StyledNewsletterTitleContainer data-scroll>
                <Title level="D3" lineHeight="4.3rem" css={padding({ bottom: bottom })} data-scroll>
                    {title}
                </Title>
                <Paragraph hide={hide} size="lg" data-scroll>
                    Subscribe to our biweekly newsletter with the best in product management, startups and digital transformation
                </Paragraph>
            </StyledNewsletterTitleContainer>
            <StyledNewsletterInputButtonContainer data-scroll>
                <StyledNewsletterInputContainer data-scroll>
                    <Input label="Your email" type="mail" data-scroll />
                    <Paragraph size="sm" lineHeight="1.25" color="mutedGray" data-scroll>
                        By signing up, you accept the terms of Muir Privacy Policy
                    </Paragraph>
                </StyledNewsletterInputContainer>
                <StyledNewsletterButtonDiv data-scroll>
                    <Button colors={"primary"} label="Subscribe" size="large" data-scroll />
                </StyledNewsletterButtonDiv>
            </StyledNewsletterInputButtonContainer>
        </StyledNewsletter>
    );
};

export default Newsletter;
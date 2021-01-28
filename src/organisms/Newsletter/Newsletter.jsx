import React from 'react';
import {
    StyledNewsletter,
    StyledNewsletterTitleContainer,
    StyledNewsletterInputContainer }
from './StyledNewsletter';
import { Title } from '../../cells/Title';
import { Input } from '../../cells/Input';
import { Paragraph } from '../../cells/Paragraph';
import { Button } from '../../cells/Button';

const Newsletter = () => {
    return (
        <StyledNewsletter>
            <StyledNewsletterTitleContainer>
                <Title level="D3" lineHeight="4.3rem">Get our Insights.</Title>
            </StyledNewsletterTitleContainer>
            <StyledNewsletterInputContainer>
                <Input placeholder="Your email" type="mail"/>
                <div>
                    <Paragraph size="sm" lineHeight="1.25" color="mutedGray">
                        By signing up, you accept the terms of Muir Privacy Policy
                    </Paragraph>
                </div>
            </StyledNewsletterInputContainer>
            <div>
                <Button colors={"primary"} label="Subscribe" size="large" />
            </div>
        </StyledNewsletter>
    );
};

export default Newsletter;
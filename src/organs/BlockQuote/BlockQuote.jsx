import React from 'react';
import Quotes from './Quotes';
import { StyledBlockQuote, TextQuotes, lineHeight } from "./StyledBlockQuote";
import Title from '../../cells/Title';
import Spacer from '../../cells/Spacer';
import Paragraph from '../../cells/Paragraph';

/**
 * Blockquote component is a quote with a SVG, quote (title) and author
 * @param {String} quote Quote (title)
 * @param {String} author Author of the quote
 */
const BlockQuote = ({ title, author = "Anonymous" }) => {
    return (
        <StyledBlockQuote>
            <Quotes />
            <TextQuotes>
                <Title level="d4" lineHeight={lineHeight()}>
                    {title}
                </Title>
                <Spacer size="md" />
                <Paragraph lineHeight="1.375" size="sm" color="mutedGray">
                    – {author}
                </Paragraph>
                <Spacer size="xxl" />
            </TextQuotes>
        </StyledBlockQuote>
    );
}

export default BlockQuote;
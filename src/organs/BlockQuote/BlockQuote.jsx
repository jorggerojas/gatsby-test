import React from 'react';
import { FormattedMessage } from 'react-intl';

import Quotes from './Quotes';
import Title from '../../cells/Title';
import Spacer from '../../cells/Spacer';

import { StyledBlockQuote, TextQuotes, lineHeight } from "./StyledBlockQuote";
import { I18Provider } from '../../i18n'
import TextSpan from '../../cells/TextSpan';

/**
 * Blockquote component is a quote with a SVG, quote (title) and author
 * @param {String} quote Quote (title)
 * @param {String} author Author of the quote, if not specified itĺl use anonymous
 */
const BlockQuote = ({ title, author = null }) => {
    return (
        <I18Provider>
            <StyledBlockQuote>
                <Quotes />
                <TextQuotes>
                    <Title level={title.length > 50 ? "4" : "d4"} lineHeight={lineHeight()}
                        fontStyle="italic"
                    >
                        {title}
                    </Title>
                    <Spacer size="md" />
                    <TextSpan lineHeight="1.375" size="sm" color="mutedGray">
                        – {author !== null ? author : <FormattedMessage id="authorAnonymous" />}
                    </TextSpan>
                    <Spacer size="xxl" />
                </TextQuotes>
            </StyledBlockQuote>
        </I18Provider>
    );
}

export default BlockQuote;
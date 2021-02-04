import React from 'react';
import styled from 'styled-components';
import Title  from '../../cells/Title';
import Paragraph from '../../cells/Paragraph';
import Spacer from '../../cells/Spacer';

const lineHeight = line => {
    switch (line) {
        case 'xs':
            return "1.375rem";
        case 'sm':
            return "2.073rem";
        case 'lg':
            return "3.285rem";
        case 'md':
        default:
            return "3.007rem";
    }
}
const StyledCard = styled.div`
    background-color: ${({ background }) => background || 'transparent'};
`;
/**
 * A simple (flat) card component with caption, title and description (or any text)
 * @param {String} caption Caption (tag or category) of the card
 * @param {String} space Space (Spacer component) between the caption and the title
 * @param {String} title Title of the card (goes under the caption) 
 * @param {String} titleLevel Level (1, 2, 3, D4) of the Title component
 * @param {String} titleLineHeight Line height of the Title component (xs to lg)
 * @param {String} color Color of the title
 * @param {String} paragraph Content of the card (summary)
 * @param {String} sizeParagraph Font size of the paragraph (xxs to lg)
 */
const Card = ({
    caption,
    space = "md",
    title,
    titleLevel,
    titleLineHeight = "md",
    color = "dark",
    paragraph,
    sizeParagraph = "md",
}) => {
    return (
        <StyledCard>
            <Paragraph family="DM Sans" size="sm" lineHeight="1.375">{caption}</Paragraph>
            <Spacer size={space} />
            <Title level={titleLevel} color={color} lineHeight={lineHeight(titleLineHeight)}>
                {title}
            </Title>
            <Spacer size="xxl" />
            <Paragraph size={sizeParagraph} lineHeight={titleLevel === '3' ? '1.333' : "1.5"}>
                {paragraph}
            </Paragraph>
        </StyledCard>
    );
};

export default Card;
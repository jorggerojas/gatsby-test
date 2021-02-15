import React from 'react';
import { ArrowRight } from 'react-ikonate';
import { StyledCard, StyledCardTitle, StyledCardAnchor } from './StyledCard';
import Image from '../../cells/Image';
import Spacer from '../../cells/Spacer';
import PostLabels from '../PostLabels';


/**
 * Card component to link another articles
 * @param {String} src Path of the post image
 * @param {String} title Title of the post
 * @param {String} to Path of the post
 * @param {String} type Type of the post
 */
const Card = ({ src, title, to, type, time }) => {
    return (
        <StyledCard data-scroll-speed="5">
            <Image data-scroll
                src={src}
                alt={`Image ${title}`}
                height="2.074rem"
            />
            <Spacer size="lg" />
            <PostLabels data-scroll
                reading_time={time}
                type={type}
                category=""
                align="start"
                justify="start"
                post={true}
            />
            <StyledCardTitle level="6" data-scroll>
                {title.length > 50 ? title.substring(0, 22) + "..." : title}
            </StyledCardTitle>
            <Spacer size="md" />
            <StyledCardAnchor href={to} label="Enlace" icon={<ArrowRight />} />
            <Spacer size="xl" />
        </StyledCard>
    );
};

export default Card;
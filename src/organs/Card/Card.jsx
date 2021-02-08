import React from 'react';
import { ArrowRight } from 'react-ikonate';
import { StyledCard } from './StyledCard';
import Image from '../../cells/Image';
import Spacer from '../../cells/Spacer';
import PostLabels from '../PostLabels';
import Title from '../../cells/Title';
import Anchor from '../../cells/Anchor';

/**
 * Card component to link another articles
 * @param {String} src Path of the post image
 * @param {String} title Title of the post
 * @param {String} to Path of the post
 * @param {String} type Type of the post
 */
const Card = () => {
    return (
        <StyledCard>
            <Image
                src="https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-2000w.jpg"
                alt="coffee"
                height="2.074rem"
            />
            <Spacer size="lg" />
            <PostLabels
                reading_time={7}
                type={'blog'}
                category=""
                align="start"
                justify="start"
                post={true}
            />
            <Title level="6">
                Identifica cuál es el verdadero costo de una pobre identificación
            </Title>
            <Spacer size="md" />
            <Anchor href="#" label="Enlace" icon={<ArrowRight />} />
            <Spacer size="xl" />
        </StyledCard>
    );
};

export default Card;
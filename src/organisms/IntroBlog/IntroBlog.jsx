import React from 'react';
import { Title } from '../../cells/Title';
import { Paragraph } from '../../cells/Paragraph';
import { PostDescription } from '../../tissues/PostDescription';
import { AuthorDescription } from '../../organs/AuthorDescription';
import StyledIntroBlog from './StyledIntroBlog';
import padding from '../../utils/padding';

const IntroBLog = ({ data }) => (
    <StyledIntroBlog size="sm" css={padding({ size: 'md' })}>
        <PostDescription data={data} align="start"
            justify="start"
            margin="1vw 0 1vw 0 " />
        <Title level="6" lineHeight="2.243" margin="3vw 0 3vw 0" marginInline="1vw">Identifica cuál es el verdadero costo de una pobre identificación</Title>
        <Paragraph lineHeight="1.5" marginInline="1vw" weight="300" css={padding({ right: 'xxl' })}>
            This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj
        </Paragraph>
        <AuthorDescription style={{ margin: "5vw" }} />
    </StyledIntroBlog>
);

export default IntroBLog;

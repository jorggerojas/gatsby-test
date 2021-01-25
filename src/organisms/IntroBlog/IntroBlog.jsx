import React from 'react';
import { Title } from '../../cells/Title';
import { Paragraph } from '../../cells/Paragraph';
import { PostDescription } from '../../tissues/PostDescription';
import { AuthorDescription } from '../../organs/AuthorDescription';
import StyledIntroBlog from './StyledIntroBlog';
import padding from '../../utils/padding';
import styled from 'styled-components';

const TextContent = styled.div`
  @media (min-width: 768px) {
    max-width: 570px;
  }
  @media (min-width: 992px) {
    max-width: 700px;
  }
`;

const WithImage = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 33px;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const SideImage = styled.img`
  width: 100%;
  max-height: 216px;
  @media (min-width: 992px) {
    width: 353px;
  }
`;
const IntroBLog = ({ data, src = null, alt = '' }) => {
  const blogContent = (
    <StyledIntroBlog size="sm">
      <TextContent>
        <PostDescription
          data={data}
          align="start"
          justify="start"
          margin="1vw 0 1vw 0 "
        />
        <Title
          level="1"
          lineHeight="2.243"
          margin="3vw 0 3vw 0"
          marginInline="1vw"
        >
          Identifica cuál es el verdadero costo de una pobre identificación
        </Title>
        <Paragraph
          lineHeight="1.5"
          marginInline="1vw"
          weight="300"
          css={padding({ right: 'xxl' })}
        >
          This chapter will be about getting started with Git. We will begin by
          explaining some background on version control tools, then move on to
          how to get Git running on your system and finally how to get it set up
          to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj
        </Paragraph>
        <AuthorDescription style={{ margin: '5vw' }} />
      </TextContent>
    </StyledIntroBlog>
  );
  if (src !== null) {
    return (
      <WithImage>
        <SideImage src={src} alt={alt} />
        {blogContent}
      </WithImage>
    );
  }

  return blogContent;
};

export default IntroBLog;

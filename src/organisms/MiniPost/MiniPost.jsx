import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StyledMiniPost, PostCol, PostRow, SideImage } from './StyledMiniPost';
import Title from '../../cells/Title';
import Paragraph from '../../cells/Paragraph';
import BackgroundImage from '../../cells/BackgroundImage';
import PostLabels from '../../organs/PostLabels';
import Author from '../../organs/Author';
import Spacer from '../../cells/Spacer';
import Hideable from '../../cells/Hideable';

/**
 * MiniPost wrap image, title, Spacer and other components to display a preview of the large post
 * @param {boolean} cover Set the image of the post as cover or in the left side
 * @param {String} type Type of the post
 * @param {Object} info Info about the post
 * @param {String} title Title of the post
 * @param {String} src Path of the image
 * @param {String} alt Alt of the image (for accesibility)
 * @param {Object} author Contains the name, job and profile image of the author
 */
const MiniPost = ({ cover, type, info, title, text, src, alt, author }) => {
  return (
    <>
      {cover ? <BackgroundImage src={src} alt={alt} /> : null}

      <StyledMiniPost fluid cover={cover.toString()}>
        <PostRow>
          {type !== 'blog' && !cover ? (
            <>
              <PostCol>
                <SideImage src={src} alt={alt} type={type} />
              </PostCol>
              <Hideable visibleOn="lg" hideOn="sm">
                <Spacer size="xxl" direction="horizontal" />
              </Hideable>
            </>
          ) : null}

          <PostCol>
            {!cover && type !== 'blog' ? (
              <Hideable after={false} visibleOn="lg">
                <Spacer size="md" />
              </Hideable>
            ) : null}
            <Row>
              <Col style={{ padding: 0 }}>
                <PostLabels
                  reading_time={7}
                  type={type}
                  category="SALES AND MARKETING, ENGINEERING"
                  align="start"
                  justify="start"
                />
              </Col>
            </Row>
            <Title level="4" weight="400" lineHeight="2.243rem">
              {title}
            </Title>
            <Spacer size="md" />
            <Paragraph lineHeight="1.5" weight="300">
              {text}
            </Paragraph>
            <Spacer size="xl" />

            {type === 'free-download' ? null : (
              <Author
                name={author.name}
                job="CEO at Viaducto Company"
                src={author.profile_image || "https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"}
              />
            )}
          </PostCol>
        </PostRow>
      </StyledMiniPost>
    </>
  );
};

export default MiniPost;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Meta from '../organisms/Meta';
import {
    TextContainer, TextRow, CardsContainer
} from '../organisms/StyledBlogPost/StyledBlogPost';
import GlobalStyle from '../utils/global';
import { PostCol, PostRow, StyledMiniPost } from '../organisms/MiniPost/StyledMiniPost';
import Newsletter from '../organisms/Newsletter';
import PostLabels from '../organs/PostLabels';
import Card from '../organs/Card';
import Author from '../organs/Author';
import BlockQuote from '../organs/BlockQuote';
import BackgroundImage from '../cells/BackgroundImage';
import Title from '../cells/Title';
import Spacer from '../cells/Spacer';
import Paragraph from '../cells/Paragraph';
import Image from '../cells/Image';

const BlogPost = () => {
    return (
        <Meta>
            <GlobalStyle />
            <BackgroundImage
                src={"http://157.230.232.77/content/images/2021/02/Wallpaper-Monta-as.jpg"}
                alt={"image"}
            />
            <StyledMiniPost fluid cover={"true"}>
                <PostRow>
                    <PostCol>
                        <Row>
                            <Col style={{ padding: 0 }}>
                                <PostLabels
                                    reading_time={7}
                                    type={'blog'}
                                    category="SALES AND MARKETING, ENGINEERING"
                                    align="start"
                                    justify="start"
                                />
                            </Col>
                        </Row>
                        <Title level="1" weight="400" lineHeight="2.243rem">
                            Identifica cuál es el verdadero costo de una pobre identificación
                        </Title>
                        <Spacer size="md" />
                        <Author
                            name={'Jorge Rojas'}
                            job="CEO at Viaducto Company"
                            src={"https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"}
                        />
                    </PostCol>
                </PostRow>
            </StyledMiniPost>
            {/* TEXTO 1 */}
            <TextContainer fluid>
                <TextRow>
                    <PostCol>
                        <Paragraph lineHeight="1.5">
                            The X/Y axis competitive analysis slide is a used by existing companies who plan to enter into an existing market. In this case the basis of competition on the X/Y axes are metrics defined by the users in the existing market.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            This slide typically shows some price/performance advantage. And in the days of battles for existing markets that may have sufficed.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            But today most startups are trying to ressegment existing markets or create new markets. How do you diagram that? What if the basis of competition in market creation is really the intersection of multiple existing markets? Or what if the markets don’t exist and you are creating one?
                            </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            We need a different way to represent the competitive landscape when you are creating a business that never existed or taking share away from incumbents by resegmenting an existing market.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            Here’s how.
                        </Paragraph>
                        <Spacer size="md" />
                        <Title level='2' lineHeight="2.073rem">
                            H2 Title
                        </Title>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            I’ve always thought of my startups as the center of the universe. So I would begin by putting my company in the center of the slide. In this example the startup is creating a new category –  a lifelong learning network for entrepreneurs. To indicate where their customers for this new market would come from, they drew the 5 adjacent market segments: corporate, higher education, startup ecosystem, institutions, and adult learning skills that they believed their future customers were in today.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            So to illustrate this they drew these adjacent markets as a cloud surrounding their company. (Unlike the traditional X/Y graph you can draw as many adjacent market segments as you’d like.)
                        </Paragraph>
                        <Spacer size="md" />
                        <Title level="3" lineHeight="2.073rem">
                            H3 Title
                        </Title>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            I’ve always thought of my startups as the center of the universe. So I would begin by putting my company in the center of the slide. In this example the startup is creating a new category –  a lifelong learning network for entrepreneurs. To indicate where their customers for this new market would come from, they drew the 5 adjacent market segments: corporate, higher education, startup ecosystem, institutions, and adult learning skills that they believed their future customers were in today.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            So to illustrate this they drew these adjacent markets as a cloud surrounding their company. (Unlike the traditional X/Y graph you can draw as many adjacent market segments as you’d like.)
                        </Paragraph>
                    </PostCol>
                </TextRow>
            </TextContainer>
            {/* IMAGEN */}
            <Image
                post={true}
                src="http://157.230.232.77/content/images/2021/02/Wallpaper-Monta-as.jpg"
                alt={"image"}
            />
            {/* TEXTO 2 */}
            <TextContainer fluid>
                <TextRow>
                    <PostCol>
                        <Paragraph lineHeight="1.5">
                            The X/Y axis competitive analysis slide is a used by existing companies who plan to enter into an existing market. In this case the basis of competition on the X/Y axes are metrics defined by the users in the existing market.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            This slide typically shows some price/performance advantage. And in the days of battles for existing markets that may have sufficed.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            But today most startups are trying to ressegment existing markets or create new markets. How do you diagram that? What if the basis of competition in market creation is really the intersection of multiple existing markets? Or what if the markets don’t exist and you are creating one?
                            </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            We need a different way to represent the competitive landscape when you are creating a business that never existed or taking share away from incumbents by resegmenting an existing market.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            Here’s how.
                        </Paragraph>
                        <Spacer size="md" />
                        <Title level='2' lineHeight="2.073rem">
                            H2 Title
                        </Title>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            I’ve always thought of my startups as the center of the universe. So I would begin by putting my company in the center of the slide. In this example the startup is creating a new category –  a lifelong learning network for entrepreneurs. To indicate where their customers for this new market would come from, they drew the 5 adjacent market segments: corporate, higher education, startup ecosystem, institutions, and adult learning skills that they believed their future customers were in today.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            So to illustrate this they drew these adjacent markets as a cloud surrounding their company. (Unlike the traditional X/Y graph you can draw as many adjacent market segments as you’d like.)
                        </Paragraph>
                        <Spacer size="md" />
                        <Title level="3" lineHeight="2.073rem">
                            H3 Title
                        </Title>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            I’ve always thought of my startups as the center of the universe. So I would begin by putting my company in the center of the slide. In this example the startup is creating a new category –  a lifelong learning network for entrepreneurs. To indicate where their customers for this new market would come from, they drew the 5 adjacent market segments: corporate, higher education, startup ecosystem, institutions, and adult learning skills that they believed their future customers were in today.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            So to illustrate this they drew these adjacent markets as a cloud surrounding their company. (Unlike the traditional X/Y graph you can draw as many adjacent market segments as you’d like.)
                        </Paragraph>
                    </PostCol>
                </TextRow>
            </TextContainer>
            {/* QUOTE */}
            <BlockQuote
                title="You miss 100% of the Shots you don’t make."
                author="Wayne Gretsky"
            />
            {/* TEXTO 3 */}
            <TextContainer fluid>
                <TextRow>
                    <PostCol>
                        <Paragraph lineHeight="1.5">
                            The X/Y axis competitive analysis slide is a used by existing companies who plan to enter into an existing market. In this case the basis of competition on the X/Y axes are metrics defined by the users in the existing market.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            This slide typically shows some price/performance advantage. And in the days of battles for existing markets that may have sufficed.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            But today most startups are trying to ressegment existing markets or create new markets. How do you diagram that? What if the basis of competition in market creation is really the intersection of multiple existing markets? Or what if the markets don’t exist and you are creating one?
                            </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            We need a different way to represent the competitive landscape when you are creating a business that never existed or taking share away from incumbents by resegmenting an existing market.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            Here’s how.
                        </Paragraph>
                        <Spacer size="md" />
                        <Title level='2' lineHeight="2.073rem">
                            H2 Title
                        </Title>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            I’ve always thought of my startups as the center of the universe. So I would begin by putting my company in the center of the slide. In this example the startup is creating a new category –  a lifelong learning network for entrepreneurs. To indicate where their customers for this new market would come from, they drew the 5 adjacent market segments: corporate, higher education, startup ecosystem, institutions, and adult learning skills that they believed their future customers were in today.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            So to illustrate this they drew these adjacent markets as a cloud surrounding their company. (Unlike the traditional X/Y graph you can draw as many adjacent market segments as you’d like.)
                        </Paragraph>
                        <Spacer size="md" />
                        <Title level="3" lineHeight="2.073rem">
                            H3 Title
                        </Title>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            I’ve always thought of my startups as the center of the universe. So I would begin by putting my company in the center of the slide. In this example the startup is creating a new category –  a lifelong learning network for entrepreneurs. To indicate where their customers for this new market would come from, they drew the 5 adjacent market segments: corporate, higher education, startup ecosystem, institutions, and adult learning skills that they believed their future customers were in today.
                        </Paragraph>
                        <Spacer size="md" />
                        <Paragraph lineHeight="1.5">
                            So to illustrate this they drew these adjacent markets as a cloud surrounding their company. (Unlike the traditional X/Y graph you can draw as many adjacent market segments as you’d like.)
                        </Paragraph>
                    </PostCol>
                </TextRow>
            </TextContainer>
            {/* ARTICLES/CARDS */}
            <CardsContainer>
                <Card />
            </CardsContainer>
            <Newsletter />
        </Meta >
    );
}

export default BlogPost;
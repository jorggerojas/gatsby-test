import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import StyledMiniPost from './StyledMiniPost';
import { Title } from '../../cells/Title';
import { Paragraph } from '../../cells/Paragraph';
import { AuthorDescription } from '../../organs/AuthorDescription';
import { PostDescription } from '../../tissues/PostDescription';
import padding from '../../utils/padding';
import config from '../../utils/config';

const { display } = config;
const SideImage = styled.img`
    width: 100%;
    height: 25.063rem;
    margin: 0;
    @media (min-width: 576px) {
        width: calc(calc(100% - 25.063rem) + 25.063rem) !important;
    }
    @media (min-width: 768px) {
        width: 100% !important;
    }
`;
const PostRow = styled(Row)`
    margin: 0;
    flex-direction: column;
    padding-left: 2.375rem;
    padding-right: 0.938rem;
    @media (min-width: 576px) {
        padding-left: 7.625rem;
        padding-right: 3.313rem;
    }
    @media (min-width: 792px) {
        flex-direction: row;
        padding-left: ${display.mobile.sm};
        padding-right: ${display.mobile.sm};
    }
    @media (min-width: 992px) {
        flex-direction: row;
        padding-left: 2.063rem;
        padding-right: 6.951rem;
    }
    @media (min-width: 1440px) {
        flex-direction: row;
        padding-left: 10.313rem;
        padding-right: 10.389rem;
    }
`;
const PostCol = styled(Col)`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    @media (min-width: 576px) {
        display: flex;
        align-items: flex-start;
        justify-content: start;
    }
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media (min-width: 992px) {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    @media (min-width: 1440px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const MiniPost = ({
    type,
    info,
    text,
    src,
    alt
}) => {
    return (
        <StyledMiniPost fluid>
            <PostRow>
                {
                    src !== null ?
                        (<PostCol css={padding({ right: 'xl', bottom: 'xl' })} xs>
                            <SideImage src={src} alt={alt} />
                        </PostCol>) :
                        null
                }
                <Col css={padding({ vertical: 'sm', horizontal: 0 })}>
                    <Container fluid>
                        <Row>
                            <Col md={10}>
                                <PostDescription
                                    info={info}
                                    align="start"
                                    justify="start"
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Title level="4" weight="400" lineHeight="2.243" css={padding({ bottom: 'md' })}>
                        ¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá
                    </Title>
                    <Paragraph lineHeight="1.5" weight="300"
                        css={padding({ bottom: 'xl' })}>
                        This chapter will be about getting started with Git. We will begin by
                        explaining some background on version control tools, then move on to
                        how to get Git running on your system and finally how to get it set up
                        to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj
                    </Paragraph>
                    <AuthorDescription />
                </Col>
            </PostRow>
        </StyledMiniPost>
    );
};

export default MiniPost;
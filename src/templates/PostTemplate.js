import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Meta from '../organisms/Meta';
import { CardsContainer } from '../organisms/StyledPost/StyledPost';
import {
    DownloadRow,
    StyledDownload,
    DownloadColumn,
} from '../organisms/StyledDownload';
import GlobalStyle from '../utils/global';
import { PostCol, PostRow, StyledMiniPost } from '../organisms/MiniPost/StyledMiniPost';
import { TYPES } from '../organisms/MiniPost/constants';
import Newsletter from '../organisms/Newsletter';
import PostContent from '../organisms/PostContent';
import { tagInfo, postType } from '../organisms/BlogRoll';
import PostLabels from '../organs/PostLabels';
import Card from '../organs/Card';
import Author from '../organs/Author';
import BackgroundImage from '../cells/BackgroundImage';
import Title from '../cells/Title';
import Paragraph from '../cells/Paragraph';
import Spacer from '../cells/Spacer';
import Image from '../cells/Image';
import { GET_POST_DATA } from '../queries/index';
import { transform, transformType } from '../utils/transform'
import Scroll from '../utils/locomotiveScroll';

const PostTemplate = (callbacks) => {
    const [selected, setSelected] = useState(0);
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState('Loading...');
    const [type, setType] = useState('Loading...');
    const [image, setImage] = useState('Loading...');
    const [summary, setSummary] = useState('Loading...');
    const [body, setBody] = useState(null);
    const [author, setAuthor] = useState({
        name: "",
        bio: "",
        profile_image: "",
        slug: ""
    })
    const [postInfo, setPostInfo] = useState({
        slug: '#',
        name: 'Loading...',
        reading_time: 0,
    });
    const onSelect = (item) => {
        setSelected(item);
    }
    const { error, data } = useQuery(GET_POST_DATA, {
        variables: { slug: useParams().slug, tag: { eq: (type !== 'Loading...' ? type : 'blog') } },
    });
    useEffect(() => {
        if (data && data.ghostPost && data.ghostPost !== null) {
            setTitle(data.ghostPost.title);
            setType(postType(data.ghostPost.tags));
            setPostInfo(tagInfo(data.ghostPost.tags, data.ghostPost.reading_time));
            setAuthor(data.ghostPost.primary_author);
            setImage(data.ghostPost.feature_image);
            setSummary(data.ghostPost.excerpt);
            setBody(data.ghostPost.html);
            if (data.allGhostPost && data.allGhostPost !== null) {
                var allCards = [];
                data.allGhostPost.edges.forEach(({ node }) => {
                    if (node.title !== title) {
                        allCards.push(
                            <Card
                                time={node.reading_time}
                                key={node.slug}
                                to={`/post/${node.slug}`}
                                title={node.title}
                                src={node.feature_image}
                                type={type}
                            />
                        )
                    }
                });
                setCards(allCards);
            }
        }
    }, [data, type, title]);
    return (
        <Meta>
            <GlobalStyle />
            <Scroll callbacks={callbacks} />
            <BackgroundImage
                data-scroll
                src={image}
                alt={`Image ${title}`}
            />
            <div data-scroll-container>
                <StyledMiniPost fluid cover={"true"}>
                    <PostRow>
                        <PostCol>
                            <Row>
                                <Col style={{ padding: 0 }}>
                                    <PostLabels
                                        data-scroll
                                        to={postInfo.slug}
                                        reading_time={postInfo.reading_time}
                                        type={type}
                                        category={postInfo.name}
                                        align="start"
                                        justify="start"
                                    />
                                </Col>
                            </Row>
                            <Title level="1" weight="400" lineHeight="2.243rem" data-scroll>
                                {title}
                            </Title>
                            <Spacer size="md" />
                            <Author
                                data-scroll
                                name={author.name}
                                job={author.bio}
                                src={author.profile_image}
                                slug={author.slug}
                            />
                        </PostCol>
                    </PostRow>
                </StyledMiniPost>
                <PostContent>
                    <Paragraph lineHeight="1.5" data-scroll>
                        {summary}
                    </Paragraph>
                    <Spacer size="md" />
                </PostContent>
                {/* TYPE FRAME */}
                {
                    type === TYPES.blog ?
                        <Image
                            data-scroll
                            post={true}
                            src={image}
                            alt={`Image ${title}`}
                        /> :
                        null
                }
                {
                    type === TYPES.freeDownload ?
                        <StyledDownload fluid>
                            <DownloadRow>
                                <DownloadColumn md="8">
                                    <Newsletter title="Download Material" bottom="xs" download={true}
                                        data-scroll hide="lg" />
                                </DownloadColumn>
                                <DownloadColumn md="4">
                                    <Image
                                        data-scroll
                                        src={image}
                                        alt={`Image ${title}`}
                                    />
                                </DownloadColumn>
                            </DownloadRow>
                        </StyledDownload> :
                        null
                }
                {
                    type === TYPES.video || type === TYPES.podcast ?
                        <div data-scroll>{ReactHtmlParser(body, { transform: transformType })}</div> :
                        null
                }
                <PostContent data-scroll>
                    {ReactHtmlParser(body, { transform: transform })}
                </PostContent>
                {/* ARTICLES/CARDS */}
                <CardsContainer>
                    <ScrollMenu
                        data-scroll
                        data={cards}
                        selected={selected}
                        onSelect={onSelect}
                        wheel={false}
                    />
                </CardsContainer>
                <Newsletter data-scroll />
            </div>
            {error &&
                'Ocurrió un error con el servidor, y no hemos podido consultar ningún post'}
        </Meta >
    );
}

export default PostTemplate;
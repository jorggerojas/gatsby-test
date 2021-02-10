import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Meta from '../organisms/Meta';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled, { css } from 'styled-components';
import GlobalStyle from '../utils/global';
import MiniPost from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';
import Title from '../cells/Title';
import config from '../utils/config';
import { tagInfo, postType } from '../organisms/BlogRoll';
import { GET_TAG_DATA } from '../queries/index';

const { display, breakpoints } = config;
const StyledTitleContainer = styled.div`
    transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
    padding-top: ${display.mobile.sm};
    padding-bottom: ${display.mobile.sm};
    padding-left: ${display.mobile.sm};
    padding-right: ${display.mobile.sm};
    @media (min-width: ${breakpoints.sm}) {
        padding-left: ${display.mobile.sm};
        padding-right: ${display.mobile.sm};
        padding-top: ${display.mobile.sm};
        padding-bottom: ${display.mobile.sm};
    }
    @media (min-width: ${breakpoints.md}) {
        padding-left: ${display.mobile.sm};
        padding-right: ${display.mobile.sm};
        padding-top: ${display.mobile.sm};
        padding-bottom: ${display.mobile.sm};
    }
    @media (min-width: ${breakpoints.lg}) {
        padding-left: 2.063rem;
        padding-right: 6.951rem;
        padding-top: ${display.desktop.sm};
        padding-bottom: ${display.desktop.sm};
    }
    @media (min-width: ${breakpoints.xl}) {
        padding-left: 10.313rem;
        padding-right: 10.389rem;
        padding-top: ${display.desktop.sm};
        padding-bottom: ${display.desktop.sm};
    }
`;

const CategoryTemplate = () => {
    let limit = 2;
    const { slug } = useParams();
    const [skip, setSkip] = useState(0);
    const [tagName, setTagName] = useState('Loading...');
    const [posts, setPosts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const { loading, error, data, refetch } = useQuery(GET_TAG_DATA, {
        variables: { skip, limit, slug: { eq: slug } },
    });
    useEffect(() => {
        if (data && data.allGhostPost.edges.length > 0) {
            const tagIndex = data.allGhostPost.edges[0].node.tags.reduce((_, actual, index) => {
                return actual.visibility === 'internal' ? index : -1
            });
            const tagName = tagIndex !== -1 ?
                data.allGhostPost.edges[0].node.tags[tagIndex].name.split("#")[1] : 'Loading...';
            setTotalCount(data.allGhostPost.totalCount);
            setPosts((previousPosts) => [
                ...previousPosts,
                ...data.allGhostPost.edges,
            ]);
            setSkip((s) => s + data.allGhostPost.edges.length);
            setTagName(tagName);
        }
    }, [data, slug]);

    const [hasMore, setHasMore] = useState(true);

    const loadMorePosts = () => {
        if (posts.length < totalCount) {
            setHasMore(true);
            setTimeout(() => {
                refetch({
                    limit,
                    skip: posts.length,
                });
            }, 5000);
        } else {
            setHasMore(false);
        }
    };
    return (
        <Meta>
            <GlobalStyle />
            <StyledTitleContainer>
                <Title size="d3">{tagName}</Title>
            </StyledTitleContainer>
            <InfiniteScroll
                css={css`
                    overflow: hidden !important;
                    `}
                data-sal="slide-up"
                data-sal-delay="1"
                data-sal-easing="ease"
                dataLength={totalCount}
                next={loadMorePosts}
                loader={<h4>Cargando...</h4>}
                hasMore={hasMore}
            >
                {posts.length > 0 &&
                    posts.map(({ node }, index) => {
                        return (
                            <div key={`post-${index}-${node.title}`}>
                                {(index % 10 === 0 && index !== 0) ? (
                                    <Newsletter />
                                ) : null}
                                <MiniPost
                                    cover={
                                        index.toString().charAt(index.toString().length - 1) === '0'
                                    }
                                    key={index}
                                    data-sal="fade"
                                    data-sal-delay="100"
                                    data-sal-easing="easeIn"
                                    type={
                                        postType(node.tags)
                                    }
                                    info={tagInfo(node.tags, node.reading_time)}
                                    title={node.title}
                                    text={node.excerpt}
                                    src={node.feature_image}
                                    alt={`Imagen de ${node.title}`}
                                    author={node.authors[0]}
                                />
                                {(index === (totalCount - 1)) ? (
                                    <Newsletter />
                                ) : null}
                            </div>
                        );
                    })}
                {loading && posts.length === 0 ? 'Cargando...' : null}
                {error &&
                    'Ocurrió un error con el servidor, y no hemos podido consultar ningún post'}
            </InfiniteScroll>
        </Meta>
    );
};

export default CategoryTemplate;

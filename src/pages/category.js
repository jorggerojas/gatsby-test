import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled, { css } from 'styled-components';
import GlobalStyle from '../utils/global';
import MiniPost from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';
import Title from '../cells/Title';
import config from '../utils/config';
import Data from '../hooks/postsData';

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

const Category = ({ category }) => {
    const dataPosts = Data();
    const [page, setPage] = useState(10);
    const [postData, setPostData] = useState([]);
    const [hasMoreContent, setHasMoreContent] = useState(true);
    const loadData = () => {
        if ((postData.length >= dataPosts.length)) {
            setHasMoreContent(false);
            return;
        }
        setTimeout(() => {
            setPostData(postData.concat(dataPosts.slice(page, (page + 10))));
            setPage((page + 10));
        }, 400);
    }
    useEffect(() => {
        setPostData(postData.concat(dataPosts.slice(0, page)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <GlobalStyle />
            <InfiniteScroll
                css={css`overflow: hidden !important;`}
                data-sal="slide-up"
                data-sal-delay="1"
                data-sal-easing="ease"
                dataLength={postData.length}
                next={loadData}
                loader={<h4>Loading...</h4>}
                hasMore={hasMoreContent}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <StyledTitleContainer>
                    <Title size="d3">{category || "Sales and Marketing"}</Title>
                </StyledTitleContainer>
                {postData.map(({ node }, index) => {
                    return (
                        <div key={`n${index}`}>
                            {(index % 10 === 0 && index !== 0) || (index === dataPosts.length) ? <Newsletter /> : null}
                            <MiniPost
                                cover={index.toString().charAt(index.toString().length - 1) === "0" && index !== 0}
                                key={index}
                                data-sal="fade"
                                data-sal-delay="100"
                                data-sal-easing="easeIn"
                                type={'video'}
                                info={'jijiji'}
                                title={node.title}
                                text={node.excerpt}
                                src={node.feature_image}
                                alt={node.feature_image}
                                author={node.authors[0]}
                            />
                        </div >
                    )
                })}
            </InfiniteScroll>
        </>
    );
};

export default Category;

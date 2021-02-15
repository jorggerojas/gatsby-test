import React from 'react';
import {
    TextContainer,
    TextRow,
} from '../StyledPost/StyledPost';
import { PostCol } from '../MiniPost/StyledMiniPost';

const PostContent = ({ children }) => {
    return (
        <TextContainer fluid>
            <TextRow>
                <PostCol>
                    {children}
                </PostCol>
            </TextRow>
        </TextContainer>
    );
}

export default PostContent;
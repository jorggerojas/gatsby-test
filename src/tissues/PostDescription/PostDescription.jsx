import React from 'react';
import { Paragraph } from '../../cells/Paragraph'
import StyledPostDescription from './StyledPostDescription';
const PostDescription = ({ data, ...props }) => (
    <StyledPostDescription {...props}>
        {data ? data.map(p => {
            return (
                <Paragraph
                    style={p.style} size={p.size || ""} hide={p.hide || ""} color={p.color || ""}
                    weight="400" lineHeight="100%" spacing="0.076"
                >
                    {p.text}
                </Paragraph>
            )
        }) : null}
    </StyledPostDescription>
);

export default PostDescription;
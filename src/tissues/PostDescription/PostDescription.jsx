import React from 'react';
import { Paragraph } from '../../cells/Paragraph'
import StyledPostDescription from './StyledPostDescription';
import padding from '../../utils/padding';

const PostDescription = ({ info, ...props }) => (
    <StyledPostDescription {...props} css={padding({ bottom: 'md' })}>
        {info ? info.map(p => {
            return (
                <Paragraph
                    family={p.family}
                    key={p.text}
                    css={p.padding ? padding(p.padding) : ""} size={p.size || "xs"} hide={p.hide || ""} color={p.color || ""}
                    weight="400" lineHeight="100%" spacing="0.076"
                >
                    {p.text}
                </Paragraph>
            )
        }) : null}
    </StyledPostDescription>
);

export default PostDescription;
import React from 'react';
import { Notebook, Radio, Download, Play } from 'react-ikonate';
import { Paragraph } from '../../cells/Paragraph'
import StyledPostDescription from './StyledPostDescription';
import padding from '../../utils/padding';
import { getSize } from '../../cells/Paragraph/StyledParagraph';

const icon = type => {
    switch (type) {
        case 'blog':
        default:
            return <Notebook fontSize={getSize('lg')} color="#2329D6" css={padding({ right: 'nano' })} />;
        case 'podcast':
            return <Radio fontSize={getSize('lg')} color="#2329D6" css={padding({ right: 'nano' })} />;
        case 'free-download':
            return <Download fontSize={getSize('lg')} color="#2329D6" css={padding({ right: 'nano' })} />;
        case 'video':
            return <Play fontSize={getSize('lg')} color="#2329D6" css={padding({ right: 'nano' })} />;
    }
}

const PostDescription = ({ info, type, ...props }) => (
    <StyledPostDescription {...props} css={padding({ bottom: 'md' })}>
        {icon(type)}
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
import React from 'react';
import { StyledColumn } from './StyledColumn.js';

/**
 * Column component for divide the children (needs to be text blocks) in columns
 * @param {React.Component} children React component to act as child (needs to be text block)
 * @param {Int} columns Number of columns to divide the children component
 * @param {String} size Screen breakpoint to make only one column
 */
const Column = ({ children, columns = 1, size = "md" }) => {
    return (
        <StyledColumn columns={columns} size={size}>
            {children}
        </StyledColumn>
    );
};

export default Column;
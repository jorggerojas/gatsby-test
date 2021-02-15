import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
const List = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`;
const Item = styled.ul`
    margin: 0 .2rem;
`;

const Navigation = () => {
    return (
        <Nav>
            <List>
                <Item>Menu</Item>
                <Item>Logo</Item>
                <Item>Features</Item>
                <Item>Pricing</Item>
                <Item>About</Item>
            </List>
            <List>
                <Item>Sign In</Item>
                <Item>Create an Account</Item>
            </List>
        </Nav>
    );
}

export default Navigation;
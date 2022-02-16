import { Suspense } from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 40px;
`;
const Link = styled(NavLink)`
    &.active {
        color: red;
    }
`;
const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const Navigator = () => {
    return (
    <Wrapper>
        <Nav>
            <Link to="/home">Home</Link>
            <Link to="/movies">Movies</Link>                        
        </Nav>
        <Suspense fallback="">
            <Outlet />
        </Suspense>        
    </Wrapper>
    )
}
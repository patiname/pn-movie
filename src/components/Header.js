import { Link } from "react-router-dom"
import styled from "styled-components"

const SHeader = styled.header`
    width:100%;
    height:60px;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0; left:0;
`;

const Logo = styled.div`
    font-size: 28px;
    font-weight: 700;
    a{
        color:crimson;
    }
`;

const MenuWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Menu = styled.div`
    font-weight:600;
    margin-left:50px;
`;



export const Header = () => {
    return <SHeader>
        <Logo>
            <Link to="/">PATI</Link>
        </Logo>

        <MenuWrap>
            <Menu>
                <Link to="/">홈</Link>
            </Menu>
            <Menu>
                <Link to="/search">탐색하기</Link>
            </Menu>
        </MenuWrap>

    </SHeader>
}
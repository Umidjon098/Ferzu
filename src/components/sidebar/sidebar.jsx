import React, { useState } from 'react';
import { SidebarData } from './sidebarData';
import styled from "styled-components";
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Submenu from './submenu';

const Nav = styled.div`
background: #353B50;
height: 65px;
display:flex;
justify-content: flex-start;
align-items: center;
`;
const Navicon = styled(Link)`
padding-left:2rem;
font-size: 2rem;
height: 65.5px;
display: flex;
justify-content: flex-start;
align-items: center;
color: #fff;
border-bottom: 1px solid #dee2e6;
`;
const SidebarNav = styled.nav`
background: #353B50;
width: 320px;
min-height: 100vh;
justify-content: center;
font-famly: "sans-serif";
position: fixed;
overflow: auto;
top:0;
left:${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 650ms;
z-index:10;
`
const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <Navicon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Navicon>
                <span className="logo">Director</span>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <Navicon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </Navicon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} onClick={showSidebar} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}
export default Sidebar;
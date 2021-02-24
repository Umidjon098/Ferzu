import React, { useState } from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"


const SidebarLink = styled(Link)`
display: flex;
color:#e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height:60px;
text-decoration: none;
font-size 14px;
transition: all 0.3s ease-in-out;
&:hover{
background: #252831;
border-left: 4px solid #632ce4;
cursor: pointer;
color: #ffffff;
text-decoration: none;
}
`;
const SidebarLabel = styled.span`
margin-left:7px;
`;
const DropdownLink = styled(Link)`
background-color: rgba(0,0,0,.15);
min-height:40px;
padding-left:3rem;
display:flex;
align-items:center;
text-decoration: none;
color: #f5f5f5;
font-size: 14px;
transition: all 0.3s ease-in-out;
&:hover{
background: #252831;
cursor: pointer;
color: #fff;
text-decoration: none;
}
`;
const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subMenu && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subMenu && subnav ? item.iconOpened : item.subMenu ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subMenu.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default Submenu;
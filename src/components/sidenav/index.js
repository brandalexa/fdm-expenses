import React, { useState } from "react";
import style from "./style.css"
import { ProSidebarProvider } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, menuClasses } from "react-pro-sidebar";
// import { useTheme, Box, Typography, IconButton, Icon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "../badge";
import { useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";


const SideNav = (props) => {

    const { collapseSidebar, toggleSidebar, broken, collapsed,  } = useProSidebar();
    // const { isDesktop } = useMediaQuery({query: "(min-width:768px)"});

    const theme = {
        sidebar: {
            backgroundColor: "#0C2548",
            color: "#ffffff",
        },
        menu: {
            menuContent: "#0C2548",
            icon: "#ffffff",
            hover: {
                backgroundColor: "#0C2548",
                 color: "#ffffff",
            },
            disabled: {
                color: "#3e5e7e",
            },
        },
    };
    
    const resetPassword = () => {
        alert("Change password email sent.");
    }

    const menuStyles = {
        submenuBgColor: "#007fff",
    };

    return (
        <div style={{ display: "flex", height: "100%" }} className="sidebar-container">
            <Sidebar
                backgroundColor="#ececec"
                customBreakPoint="768px"
                transitionDuration={500}
                >
                <Menu
                >
                    <div className="toggle-button">
                        <h1 suffix="Test">FDM Expenses</h1>
                    </div>
                    <SubMenu className="menu-item" suffix={<Badge value={props.notifications}/>} label={props.name}>
                        <MenuItem component={<Link to="/notifications" />}suffix={<Badge value={props.notifications}/>}>Notifications</MenuItem>
                        <MenuItem component={<Link to={`/my-details`} />}>My Details</MenuItem>
                        <MenuItem onClick={resetPassword}>Change Password</MenuItem>
                    </SubMenu>
                    <SubMenu label="Claim">
                        <MenuItem component={<Link to={`/view-claim`} />}>View Claims</MenuItem>
                        <MenuItem component={<Link to={`/new-claim`} />}>Create Claim</MenuItem>
                    </SubMenu>
                    {/* <SubMenu label="Manage">
                        <SubMenu label="Claims">
                            <MenuItem component={<Link to={`/manage-pending-claims`} />}>Pending Claims</MenuItem>
                            <MenuItem component={<Link to={`/view-closed-claims`} />}>Closed Claims</MenuItem>
                        </SubMenu>
                        <SubMenu label="User">
                            <MenuItem component={<Link to={`/new-user`} />}>New User</MenuItem>
                            <MenuItem component={<Link to={`/manage-user`} />}>Manage User</MenuItem>
                        </SubMenu>
                    </SubMenu> */}
                </Menu>
            </Sidebar>
            <main style={{ padding: 10 }}>
                <div id="toggle-sidebar">
                    {broken && (
                        <MenuIcon onClick={toggleSidebar}/>
                    )}
                </div>
            </main>
        </div>
    );
}

export default SideNav;
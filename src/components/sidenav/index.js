import React, { useState } from "react";
import style from "./style.css"
import { ProSidebarProvider } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
// import { useTheme, Box, Typography, IconButton, Icon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "../badge";

const SideNav = (props) => {

    const { collapseSidebar, toggleSidebar, broken, collapsed } = useProSidebar();

    return (
        <div style={{ display: "flex", height: "100%" }} className="sidebar-container">
            <Sidebar
                backgroundColor="#0C2548"
                customBreakPoint="768px"
                transitionDuration={500}
                >
                <Menu>
                    <div className="toggle-button">
                        <h1 suffix="Test">FDM Expenses</h1>
                        <MenuIcon onClick={collapsed ? toggleSidebar() : collapseSidebar()}/>
                    </div>
                    <SubMenu suffix={<Badge value={props.notifications}/>} label={props.name}>
                        <MenuItem suffix={<Badge value={props.notifications}/>}>Notifications</MenuItem>
                        <MenuItem>My Details</MenuItem>
                        <MenuItem>Change Password</MenuItem>
                    </SubMenu>
                    <SubMenu label="Claim">
                        <MenuItem>View Claims</MenuItem>
                        <MenuItem>Create Claim</MenuItem>
                        <MenuItem>Sent Claims</MenuItem>
                    </SubMenu>
                    <SubMenu label="Manage">
                        <SubMenu label="Claims">
                            <MenuItem>Pending Claims</MenuItem>
                            <MenuItem>Closed Claims</MenuItem>
                        </SubMenu>
                        <SubMenu label="User">
                            <MenuItem>New User</MenuItem>
                            <MenuItem>Manage User</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Sidebar>
            <main style={{ padding: 10 }}>
                <div>
                    {broken && (
                        <button className="sb-button" onClick={() => toggleSidebar()}>
                        Toggle
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
}

export default SideNav;
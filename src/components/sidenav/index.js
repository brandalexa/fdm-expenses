import React, { useState } from "react";
import style from "./style.css"
import { ProSidebarProvider } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import Badge from "../badge";

const SideNav = (props) => {

    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

    return (
        <div style={{ display: "flex", height: "100%" }}>
            <Sidebar
                //backgroundColor="#0C2548"
                customBreakPoint="768px"
                transitionDuration={500}
                >
                <Menu>
                    <SubMenu suffix={<Badge value={props.notifications}/>} label={props.name} className="show-notification">
                        <MenuItem suffix={<Badge value={props.notifications}/>} className="show-notification">Notifications</MenuItem>
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
            <main style={{padding: 10}}>
                <div>
                    {broken && (
                        <button className="sb-button" onclick={() => toggleSidebar()}>
                            Menu
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
}

export default SideNav;
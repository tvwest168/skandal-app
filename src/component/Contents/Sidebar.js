import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SidebarRow from './SidebarRow';
import { NavLink } from 'react-router-dom';

function Sidebar({token}) {
    return (
        <div className="bodycontent_sidebar"> 
            <NavLink   to='/'>
            <SidebarRow selected="selected" Icon={HomeIcon} title={"Home"} />
            </NavLink>
            <NavLink to='/c/asian'>
            <SidebarRow Icon={SubscriptionsIcon} title={"Asian"} />
            </NavLink>
            <NavLink to='/c/barat'>
            <SidebarRow Icon={SubscriptionsIcon} title={"Barat"} />
            </NavLink>
            <NavLink to='/c/jepang'>
            <SidebarRow Icon={SubscriptionsIcon} title={"Jepang"} />
            </NavLink>
            <NavLink to='/c/indonesia'>
            <SidebarRow Icon={SubscriptionsIcon} title={"Indonesia"} />
            </NavLink>
            <NavLink to='/c/hentai'>
            <SidebarRow Icon={SubscriptionsIcon} title={"Hentai"} />
            </NavLink>
            <NavLink to='/c/viral'>
            <SidebarRow Icon={WhatshotIcon} title={"Viral"} />
            </NavLink>
        </div>
    )
}

export default Sidebar

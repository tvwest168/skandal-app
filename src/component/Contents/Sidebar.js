import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SidebarRow from './SidebarRow';
import { NavLink } from 'react-router-dom';

function Sidebar({token}) {

    function handleClick(title,e) {
        e.preventDefault();
        //Event.preventDefault();
        console.log('You clicked submit.'+title);
        window.location = "/#/c/"+title;
       // window.location.reload();
    }
    return (
        <div className="bodycontent_sidebar"> 
            <NavLink   to='/'>
            <SidebarRow selected="selected" Icon={HomeIcon} title={"Home"} />
            </NavLink>
            <NavLink to='/c/asian' onClick={(e)=>handleClick('asian',e)}>
            <SidebarRow Icon={SubscriptionsIcon} title={"Asian"} />
            </NavLink>
            <NavLink to='/c/barat' onClick={(e)=>handleClick('barat',e)}>
            <SidebarRow Icon={SubscriptionsIcon} title={"Barat"} />
            </NavLink>
            <NavLink to='/c/jepang' onClick={(e)=>handleClick('jepang',e)}>
            <SidebarRow Icon={SubscriptionsIcon} title={"Jepang"} />
            </NavLink>
            <NavLink to='/c/indonesia' onClick={(e)=>handleClick('indonesia',e)}>
            <SidebarRow Icon={SubscriptionsIcon} title={"Indonesia"} />
            </NavLink>
            <NavLink to='/c/hentai' onClick={(e)=>handleClick('hentai',e)}>
            <SidebarRow Icon={SubscriptionsIcon} title={"Hentai"} />
            </NavLink>
            <NavLink to='/c/viral' onClick={(e)=>handleClick('viral',e)}>
            <SidebarRow Icon={WhatshotIcon} title={"Viral"} />
            </NavLink>
        </div>
    )
}

export default Sidebar

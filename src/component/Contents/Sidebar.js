import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SidebarRow from './SidebarRow';
import { NavLink } from 'react-router-dom';
import { useGlobalState} from 'state-pool';
//import  { useState  } from 'react';

function Sidebar() {
    const [currentCategory,setCurrentCategory] = useGlobalState("currentCategory");
    const [currentTypeCategory,setCurrentTypeCategory] = useGlobalState("CurrentTypeCategory");
    const [currentTitle,setCurrentTitle] = useGlobalState("CurrentTitle");
    const [selectedIndex,setSelectedIndex] = useGlobalState("CurrentSelectedIndex");
    const [currentSearchText,setCurrentSearchText] = useGlobalState("CurrentSearchText");
 
    
    
    function handleHomeClick(title,e){
        //e.preventDefault();
        //console.log('You clicked submit.'+ title + ",currentCategory:" +currentCategory + currentTitle +",currentTypeCategory:"+ currentTypeCategory);
        setCurrentTypeCategory('main');
        setCurrentTitle(title);
        setCurrentSearchText("");
        setSelectedIndex(0);
    }

    function handleClick(title,category,e) {
        //e.preventDefault();
        setCurrentTypeCategory('category');
        setCurrentCategory(category);
        setCurrentTitle(title);
        setSelectedIndex(category);
        setCurrentSearchText("");
        //window.location.reload();
        //window.location = "/#/c/"+title;
    }
    return (
        <div className="bodycontent_sidebar"> 
            <NavLink   to='/' onClick={(e)=>handleHomeClick('Latest Movies',e)} >
            <SidebarRow selected={ selectedIndex === 0 ? "selected" : ""}  Icon={HomeIcon} title={"Home"} />
            </NavLink>
            <NavLink to='/c/asian'  onClick={(e)=>handleClick('asian','1',e)}>
            <SidebarRow selected={ selectedIndex === 1 ? "selected" : ""} Icon={SubscriptionsIcon} title={"Asian"} />
            </NavLink>
            <NavLink to='/c/barat' onClick={(e)=>handleClick('barat','2',e)}>
            <SidebarRow selected={ selectedIndex === 2 ? "selected" : ""} Icon={SubscriptionsIcon} title={"Barat"} />
            </NavLink>
            <NavLink to='/c/jepang' onClick={(e)=>handleClick('jepang','3',e)}>
            <SidebarRow selected={ selectedIndex === 3 ? "selected" : ""} Icon={SubscriptionsIcon} title={"Jepang"} />
            </NavLink>
            <NavLink to='/c/indonesia' onClick={(e)=>handleClick('indonesia','4',e)}>
            <SidebarRow selected={ selectedIndex === 4 ? "selected" : ""} Icon={SubscriptionsIcon} title={"Indonesia"} />
            </NavLink>
            <NavLink to='/c/hentai' onClick={(e)=>handleClick('hentai','5',e)}>
            <SidebarRow selected={ selectedIndex === 5 ? "selected" : ""} Icon={SubscriptionsIcon} title={"Hentai"} />
            </NavLink>
            <NavLink to='/c/viral' onClick={(e)=>handleClick('viral','6',e)}>
            <SidebarRow selected={ selectedIndex === 6 ? "selected" : ""} Icon={WhatshotIcon} title={"Viral"} />
            </NavLink>
        </div>
        
    )
}

export default Sidebar

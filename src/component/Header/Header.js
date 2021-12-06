import React , { useState, useEffect  } from 'react';
import axios from 'axios';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { NavLink } from 'react-router-dom';
//import { PostAdd } from '@material-ui/icons';
import { useGlobalState} from 'state-pool';




import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


function Header() {

    const [CurrentTypeCategory,setCurrentTypeCategory] =useGlobalState("CurrentTypeCategory");
    const [currentSearchText,setCurrentSearchText] = useGlobalState("CurrentSearchText");
    const [currentTitle,setCurrentTitle] = useGlobalState("CurrentTitle");
    const [selectedIndex,setSelectedIndex] = useGlobalState("CurrentSelectedIndex");
    
    const [postsa,setPosts] = useState([]);
    const [name, setName] = useState("");

    function handleSubmit(event) {
       // event.preventDefault();
     
        setCurrentSearchText(name);
        setCurrentTypeCategory("search");
        setCurrentTitle("search");
        setSelectedIndex(0);
    }

    function handleClickLogo(event){
        window.location = '#/';
        window.location.reload();
    }


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          
         <div className="header_drawer_kategory">
           
             <img className="header__logo1" src="./logo2.jpg" alt="studioskandal"  onClick={handleClickLogo} />
         </div>
         <div className="header_drawer_kategory_content">
          <List>
            {['asian', 'barat', 'jepang', 'indonesia', 'hentai','viral'].map((text, index) => (
               <a key={text} href={"#/c/"+text} className="pop" > 
              <ListItem button key={text} onClick="handleNav" >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              </a>
            ))}
          </List>
          </div>
          <Divider />
          
        </Box>
      );

    useEffect(() => {
   
        const  fetchData = async () =>{
        
            /* Take Menu */
            var configPosts = {
              method: 'GET',
            //url: 'https://panel.studioskandal.com/api/list_menu',
                url: 'https://txmo.studioskandal.com/?mod=list_menu'
                /*,
              headers: { 
               'authorization': 'Bearer ' + token
              }*/
            };
            const resPosts = await axios(configPosts);
            setPosts(resPosts.data.data);
            
            
        }
        fetchData();
    
    
      }, []);

    return (
        <div className="header shadow">
            <div className="header__left">
                <React.Fragment key={'left'}>
                <MenuIcon onClick={toggleDrawer('left', true)} />
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
                </React.Fragment>
                <img className="header__logo" src="./logo2.jpg" alt="studioskandal"  onClick={handleClickLogo} />
            </div>  
            <div className="header__input">
                <form onSubmit={handleSubmit}>
                <input id="txtSearch"type="text" placeholder="Search" value={name}   onChange={(e) => setName(e.target.value)} />
                <NavLink  type="submit"  to='/' onClick={handleSubmit} >
                <SearchIcon type="submit" className="header__input_button" />
                </NavLink  >
               </form>
            </div>
            <div className="header__text">
                <label >KUMPULAN  <span>SKANDAL VIDEO</span> TERBAIK</label>
                <div className="header_menu">
                    {postsa.map(post=>(
                        <div key={post.slug}>{post.menu}</div>
                    ))}
                </div>
                
              {/* <PostAdd /> */} 
            </div>
            {/*
import SettingsIcon from '@material-ui/icons/Settings';
<div className="header__right">
                 <button  >Join For FREE</button>
                 <label>Log in</label>
                 <SettingsIcon className="header_input_options" />
    </div>*/}
            <div>
                
            </div>
        </div>
        
    )
}

export default Header

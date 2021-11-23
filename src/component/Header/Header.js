import React , { useState, useEffect  } from 'react';
import axios from 'axios';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { NavLink } from 'react-router-dom';
//import { PostAdd } from '@material-ui/icons';

function Header({token}) {

 
    const [postsa,setPosts] = useState([]);
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log('The name you entered was: {name}');
    }

    useEffect(() => {
   
        const  fetchData = async (token) =>{
        
            /* Take Menu */
            var configPosts = {
              method: 'GET',
              url: 'https://panel.studioskandal.com/api/list_menu',
              headers: { 
               'authorization': 'Bearer ' + token
              }
            };
            const resPosts = await axios(configPosts);
            setPosts(resPosts.data.data);
            
            
        }
        fetchData();
    
    
      }, []);

    return (
        <div className="header shadow">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" src="./logo2.jpg" alt="studioskandal" />
            </div>  
            <div className="header__input">
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" value={name}   onChange={(e) => setName(e.target.value)} />
                <NavLink  type="submit"  to='/'>
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

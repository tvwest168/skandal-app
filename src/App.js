import  { useState, useEffect }  from 'react';
import './App.css';
import './component/Header/Header';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import BodyContent from './component/BodyContent';
import DetailContent from './DetailContent';
import Sidebar from './component/Contents/Sidebar';

import axios from 'axios';

//import { create } from 'ipfs-http-client';
import {
  
  HashRouter,
  Switch,
  Route
} from "react-router-dom";



function App() {
  
  const [token, setToken] = useState('');

  useEffect(() => { 
   
    const  fetchData = async () =>{
            /* ========== */
            /* Take Token */
            
            var config = {
              method: 'POST',
              url: 'https://panel.studioskandal.com/api/get-token?secret=6d0789cf46516352919972874061947a'
            };
            const res = await axios(config);
            setToken(res.data.data.access_token);         

    }  
    fetchData();


    
  }
  ,[]); 
 
  return (
    <div className="app">
      
       
  
       <HashRouter >
       <Header token={token} />    

       <div className="app_page">
  
            <Switch>
                <Route path="/c/asian">
                    
                      <BodyContent title="Asian" category="1" token={token} />
                </Route>
                <Route path="/c/barat">
                      <BodyContent title="Barat"  category="2" token={token} />
                </Route>
                <Route path="/c/jepang">
                    <BodyContent title="Jepang" category="3" token={token} />
                </Route>
                <Route path="/c/indonesia">
                    <BodyContent title="Indonesia" category="4" token={token} />
                </Route>
                <Route path="/c/hentai">
                     <BodyContent title="Hentai" category="5" token={token}  />
                </Route>
               
               
                <Route path="/c/viral">
                    <BodyContent title="Viral"  category="6" token={token}  />
                </Route>
                <Route path="/s/:searchText">
                    <BodyContent title="Search"   token={token}  />
                </Route>
              
                <Route path="/m/:id">
                    <Sidebar token={token}  />
                    <DetailContent  token={token}  />
                </Route>
                <Route path="/">
                      
                     <BodyContent  title="New Movies" token={token} />
                </Route>
            </Switch>
            </div> 
        <Footer/>   
       </HashRouter>
        
     
       
    </div>
  );
}

export default App;

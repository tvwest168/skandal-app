import './App.css';
import './component/Header/Header';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import BodyContent from './component/BodyContent';
import DetailContent from './DetailContent';
import Sidebar from './component/Contents/Sidebar';
import {store, useGlobalState} from 'state-pool';
//import axios from 'axios';
import {
  
  
  HashRouter,
  Switch,
  Route
} from "react-router-dom";


store.setState("token", "tokenapp");
store.setState("currentCategory", "");
store.setState("CurrentTypeCategory", "main");
store.setState("CurrentTitle", "LATEST MOVIES");
store.setState("CurrentSearchText", "");
store.setState("CurrentSelectedIndex", 0);

function App() {
  const [token] = useGlobalState("token");
  const [currentTypeCategory,setCurrentTypeCategory] = useGlobalState("CurrentTypeCategory");
  const [currentCategory,setCurrentCategory] = useGlobalState("currentCategory");
  const [currentTitle,setCurrentTitle] = useGlobalState("CurrentTitle");
  
  
  switch(window.location.href){
    case 'http://localhost:3000/#/c/asian': 
      setCurrentTypeCategory('category');
      setCurrentTitle('asian');
    break;
    case 'http://localhost:3000/#/c/barat':  
      setCurrentTypeCategory('category');
      setCurrentTitle('barat');
    break;
    case 'http://localhost:3000/#/c/jepang':
      setCurrentTypeCategory('category');
      setCurrentTitle('jepang');
    break;
    case 'http://localhost:3000/#/c/indonesia':
      setCurrentTypeCategory('category');
      setCurrentTitle('indonesia');
    break;
    case 'http://localhost:3000/#/c/hentai':
      setCurrentTypeCategory('category');
      setCurrentTitle('hentai');
    break;
    case 'http://localhost:3000/#/c/viral':
      setCurrentTypeCategory('category');
      setCurrentTitle('viral');
    break;
  }
  

  return (
    <div className="app">
      
       
  
       <HashRouter >
       <Header token={token} />    

       <div className="app_page">
            <Switch>
               
               
               
                <Route path="/c/asian">
                      <BodyContent title="Asian"  category="1" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/barat">
                      <BodyContent title="Barat"  category="2" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/jepang">
                    <BodyContent title="Jepang"   category="3" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/indonesia">
                    <BodyContent title="Indonesia" category="4" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/hentai">
                     <BodyContent title="Hentai"   category="5" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/viral">
                    <BodyContent title="Viral"     category="6" typeCategoryMain="category"  token={token} />
                </Route>
                
                
                <Route path="/c/asian/p/:id">
                     <BodyContent title="Viral"     category="6" typeCategoryMain="category"  token={token} />
                </Route>
                <Route path="/c/barat/p/:id">
                     <BodyContent title="Viral"     category="6" typeCategoryMain="category"  token={token} />
                </Route>
                <Route path="/c/jepang/p/:id">
                     <BodyContent title="Viral"     category="6" typeCategoryMain="category"  token={token} />
                </Route>
                <Route path="/c/indonesia/p/:id">
                     <BodyContent title="Viral"     category="6" typeCategoryMain="category"  token={token} />
                </Route>
                <Route path="/c/hentai/p/:id">
                     <BodyContent title="Viral"     category="6" typeCategoryMain="category"  token={token} />
                </Route>
                <Route path="/c/viral/p/:id">
                     <BodyContent title="Viral"     category="6" typeCategoryMain="category"  token={token} />
                </Route>

                <Route path="/m/:id" >
                    <Sidebar token={token}  />
                    <DetailContent token={token} />
                </Route>
                <Route path="/s/:searchText" token={token}>
                    <BodyContent title="Search"   category="s" typeCategoryMain="search"   />
                </Route>
                <Route path="/">
                     <BodyContent  title="Latest Movies" category="m" typeCategoryMain="main" token={token} />
                </Route>
            </Switch>
            </div> 
        <Footer/>   
       </HashRouter>
        
     
       
    </div>
  );
}

export default App;

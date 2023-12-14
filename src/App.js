import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/recipes/:id'>
            <Recipe />
          </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App

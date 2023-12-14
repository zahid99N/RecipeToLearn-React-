import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Searchbar from './Searchbar'


export default function Navbar() {
  return (
      <div className="navbar">
          <nav>
              <Link to='/' className="brand"><h1>Cooking Recipe</h1></Link>
              <Searchbar/>
              <Link to='/create'>Create Recipe</Link>
              
              
          </nav>
    </div>
  )
}

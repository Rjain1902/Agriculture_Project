import main_background from './utils/images/main_background.png'
import { Nav } from './components/Nav'
import { Link } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <div className='w-full h-screen' style={{backgroundImage: `url(${main_background})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
     <Nav/>
     <div className='navigation_div' >
     <Link to='/Home' className='navigation_button' >HOME</Link>
     <Link to='/About'  className='navigation_button'> ABOUT</Link>
     <Link to='/Contact'  className='navigation_button'>CONTACT</Link>
     </div>
     
    </div>
  )
}

export default App

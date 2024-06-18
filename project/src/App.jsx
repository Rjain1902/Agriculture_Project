import main_background from './utils/images/main_background.png'
import { Nav } from './components/Nav'
function App() {

  return (
    <div className='w-full h-screen' style={{backgroundImage: `url(${main_background})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
     <Nav/>
    </div>
  )
}

export default App

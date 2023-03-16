import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

import './App.css'

const App = () => (
  <>
    <Header/>
    <div className='result'>
      <Home/>
      <About/>
    </div>
  </>
)

export default App
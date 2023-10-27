import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>


      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/product/:id' element={<Home />} />
        <Route path='/category/:name' element={<Home />} />

      </Routes>

    </div>
  );
}

export default App;

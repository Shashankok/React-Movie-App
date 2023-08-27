import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import SingleMovie from './SingleMovie';
import Home from './Home';
import Search from './Search';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/:id' element={<SingleMovie/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;

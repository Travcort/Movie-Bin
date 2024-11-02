import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/Search';
import Navbar from './components/Navbar';
import NotFound from './pages/404Page';

function App() {

  return (
   <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
   </>
  );
}

export default App;

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {CatsPage} from './pages/CatsPage'
import { CatsFormPage } from './pages/CatsFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from "react-hot-toast";
import { Favorites } from './pages/Favorites';

function App () {
  return (
    <BrowserRouter>
    <div className='container mx-auto'>
    <Navigation />
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<CatsPage />} />
      <Route path='/cats-create' element={<CatsFormPage/>} />
      <Route path='/cats/:id' element={<CatsFormPage/>} />
      <Route path='/favoritos' element={<Favorites/>} />
    </Routes>
    <Toaster />
    </div>
    </BrowserRouter>
  )
}

export default App
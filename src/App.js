import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js';
import Home from './Pages/Home.js'
import Error404 from './Pages/Error404.js';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
        <Navbar />
            <main>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path="/*" element={<Error404 />} />
                </Routes>
            </main>
        <Footer />
    </div>
  )
}
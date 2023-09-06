import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';

import Home from './Pages/Home/Home.js';
import Interessen from './Pages/Interessen/Interessen.js';
import Itprojekte from './Pages/Itprojekte/Itprojekte.js';
import Lebenslauf from './Pages/Lebenslauf/Lebenslauf.js';
import Portfolio from './Pages/Portfolio/Portfolio.js';
import Login from './Pages/Login/Login.js';
import Staerken from './Pages/Staerken/Staerken.js';
import Error404 from './Pages/Error404/Error404.js';

import { Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <div>
      <Navbar />
      <body>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/interessen' element={<Interessen />} />
            <Route exact path='/itprojekte' element={<Itprojekte />} />
            <Route exact path='/lebenslauf' element={<Lebenslauf />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/staerken' element={<Staerken />} />
            <Route exact path="/*" element={<Error404 />} />
          </Routes>
        </main>
      </body>
      <Footer />
    </div>
  )
}
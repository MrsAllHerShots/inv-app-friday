import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Products from './pages/Products';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

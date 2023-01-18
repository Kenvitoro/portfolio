import './App.scss';
import { Route, Routes } from "react-router-dom"
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';
import About from './Components/about';

function App() {
  return (
   <>
  <Routes>

    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
    </Route>
  </Routes>
   </>
  );
}

export default App;

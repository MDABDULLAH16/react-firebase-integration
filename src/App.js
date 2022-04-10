
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Registers from './components/Registers/Registers';
import RequerAuth from './components/RequerAuth/RequerAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/orders' element={
          <RequerAuth>
            <Orders></Orders>
          </RequerAuth>
        }>

        </Route>

        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/registers' element={<Registers></Registers>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

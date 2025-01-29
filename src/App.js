import './App.css';
import Footer from './components/MainPage/Footer/Footer';
// import HomePage from './Pages/Home/HomePage';
import Navbar from './components/Utilities/navbar/Navbar';
import { BrowserRouter, HashRouter, Route, Routes, } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
// import Mmnn from './components/SecondPage/Mmnnnn';
import Mmnnnn from './components/SecondPage/Mmnnnn';
import ProductDetails from './components/ProductDetails/productdetails/ProductDetails';
import { Provider } from 'react-redux';
import { store } from './components/redux/store/Store';
import { CartProvider } from 'react-use-cart';
import Cart from './components/Utilities/navbar/cart/Cart';
import Login from './components/Utilities/navbar/login&register/Login';
import Register from './components/Utilities/navbar/login&register/Register';
// import thunkMiddleware from 'redux-thunk'



// import Mmnn from './components/SecondPage/Mmnn';

function App() {

  // const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
  // const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)


  // const store = createStore(Redux)

  return (
    <CartProvider>
      <Provider store={store} >
        <div className="App">
          <BrowserRouter >
          <Navbar />
            <Mmnnnn />
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/product-details/:id' element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </Provider>
    </CartProvider>
  );
}

export default App;

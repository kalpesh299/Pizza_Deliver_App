
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { HomePage } from './pages/HomePage';
import { PizzaProvider } from './context/PizzaContext';
import { OrderPage } from './component/OrderPage';
import { OrderDone } from './component/OrderDone';
import { Homepage } from './component/Homepage';

function App() {
  return (
    <div className="">
      <PizzaProvider>
   
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/ordernow' element={<OrderPage/>}/>
      <Route path='/orderdone' element={<OrderDone/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
     </Routes>
     </BrowserRouter>
      </PizzaProvider>
    
    </div>
  );
}

export default App;

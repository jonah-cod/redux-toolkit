import { useEffect } from 'react';
import './App.css';
import Todos from './components/todos';
import NewTodo from './components/newTodo';
import { getAllProducts, getProductById } from './redux/slices/productsSlice';

import { useDispatch, useSelector } from 'react-redux';


function App() {  

  const dispatch = useDispatch();
  const  { isLoading, product } = useSelector(state=>state.productdetails)

  const handlegetProduct = ()=>{
    dispatch(getProductById(1))
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  return (
    <div className="App">
      <NewTodo/>
      <Todos/>
      <button onClick={handlegetProduct}>view product</button>
      {console.log()}
      {isLoading? <p>Loading...</p> : <p>{product?.id}</p>}
    </div>
  );
}

export default App;

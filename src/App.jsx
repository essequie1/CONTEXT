import './App.css';
import { Item } from './Item';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <CartProvider>
      <Item />
    </CartProvider>
  );
}

export default App;

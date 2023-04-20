import { useCartContext } from './context/cartContext';

export const Item = () => {
  const { cart, addCart, total, removeCart } = useCartContext();

  const addToCart = () => {
    addCart({ id: cart.length + 1, name: 'Celular', precio: 2400 });
  };

  const removeFromCart = () => {
    removeCart(1);
  };

  return (
    <div>
      <button onClick={() => addToCart()}>HOLA</button>
      <button onClick={() => console.log(cart)}>cart</button>
      <button onClick={() => removeFromCart()}>remover 1</button>
      <h2>{total}</h2>
    </div>
  );
};

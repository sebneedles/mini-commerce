import React from 'react';

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce(
    (acc, comp) => acc + comp.price * comp.qty,
    0
  );
  const taxPrice = itemsPrice * 0.2;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x {item.price.toFixed(2)} €
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">{itemsPrice.toFixed(2)} €</div>
          </div>
          <div className="row">
            <div className="col-2">Taxe</div>
            <div className="col-1 text-right">{taxPrice.toFixed(2)} €</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping</div>
            <div className="col-1 text-right">{shippingPrice.toFixed(2)} €</div>
          </div>
          <div className="row">
            <div className="col-2">Total</div>
            <div className="col-1 text-right">{totalPrice.toFixed(2)} €</div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert('Implement Checkout')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Basket;

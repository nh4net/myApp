import React, { useState } from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';

const initialCartData = [
  { id: 1, name: '기계식 키보드', price: 120000, quantity: 1 },
  { id: 2, name: '무선 마우스', price: 85000, quantity: 2 },
  { id: 3, name: 'QHD 모니터', price: 350000, quantity: 1 }
];


export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartData);
  
  // 수량 증가 함수 (불변성 유지)
  const handleIncrease = (id) => {

    const newCartItems = [ ...cartItems ];
    for (let i = 0; i < newCartItems.length; i++) {
      if (newCartItems[i].id === id) {        
        newCartItems[i].quantity += 1;        
      } 
    }
    setCartItems(newCartItems);



    /*
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const newItem = {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity + 1
        };
        return newItem;
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
  */

    /*
    setCartItems(prevItems =>
      prevItems.map((item) =>
        //item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    */
  };

  // 수량 감소 함수 (1 미만 하락 방지 방어 로직 및 불변성 유지)
  const handleDecrease = (id) => {

    /*
    setCartItems(prevItems =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    */
  };

  // 항목 삭제 함수 (filter를 활용한 불변성 유지)
  const handleRemove = (id) => {
    setCartItems(prevItems => prevItems.filter((item) => item.id !== id));
  };  

  // 파생 상태 연산: 총 수량 및 총 결제 금액
  //const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  //const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = 0;
  const totalPrice = 0;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>장바구니</h2>
      <CartList
        items={cartItems}        
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}        
      />
      <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
    </div>
  );
}

import React from 'react';
import CartItem from './CartItem';

export default function CartList({ items, onIncrease, onDecrease, onRemove }) {
  if (items.length === 0) {
    return <p>장바구니가 비어 있습니다.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}          
          onIncrease={() => onIncrease(item.id)}
          onDecrease={() => onDecrease(item.id)}
          onRemove={() => onRemove(item.id)}          
        />
      ))}
    </ul>
  );
}

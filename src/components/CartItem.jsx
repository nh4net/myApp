import React from 'react';

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const itemTotalPrice = item.price * item.quantity;

  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      borderBottom: '1px solid #ccc', 
      padding: '10px 0' 
    }}>
      <div>
        <strong>{item.name}</strong>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
          단가: {item.price.toLocaleString()}원
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div>
          <button onClick={onDecrease} disabled={item.quantity <= 1}>-</button>
          <span style={{ margin: '0 10px' }}>{item.quantity}</span>
          <button onClick={onIncrease}>+</button>
        </div>
        
        <div style={{ width: '100px', textAlign: 'right' }}>
          {itemTotalPrice.toLocaleString()}원
        </div>

        <button onClick={onRemove} style={{ color: 'red', marginLeft: '10px' }}>
          삭제
        </button>
      </div>
    </li>
  );
}

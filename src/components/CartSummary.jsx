import React from 'react';

export default function CartSummary({ totalQuantity, totalPrice }) {
  return (
    <div style={{ 
      marginTop: '20px', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '8px',
      textAlign: 'right'
    }}>
      <h3>결제 예정 정보</h3>
      <p>총 상품 수량: <strong>{totalQuantity}</strong>개</p>
      <h3 style={{ color: '#0056b3' }}>
        총 결제 금액: {totalPrice.toLocaleString()}원
      </h3>
    </div>
  );
}

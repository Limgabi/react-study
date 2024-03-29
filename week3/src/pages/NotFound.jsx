import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='page-container'>  
      <div style={{
        marginTop: "48px",
        fontSize: "40px",
        fontWeight: "bold",
        marginBottom: "32px"
      }}>해당 페이지를 찾지 못했습니다.</div>

      <div style={{
        fontSize: "24px",
        lineHeight: "1.6"
      }}>주소가 잘못됐거나 더 이상 제공되지 않는 페이지입니다.</div>

      <div 
        onClick={() => navigate('/')}
        style={{
          fontSize: "24px",
          lineHeight: "1.6",
          color: "red",
          cursor: "pointer"
      }}>메인 페이지로 이동</div>
    </div>
  );
}

export default NotFound;
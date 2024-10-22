import React from 'react';

export default function Modal({ message, name, status }) {
  return (
    <div style={{ 
      border: '1px solid', 
      padding: '8px 25px', 
      backgroundColor: status === 'error' ? '#ffcccc' : '#ccffcc', 
      color: status === 'error' ? '#ff0000' : '#008000',
      position:"absolute",
      top:"5%",
      right:"5%",
      borderRadius:'10px',
      display:"flex",
      flexDirection:"column",
    }}>
      <h2 style={{
        fontSize: '20px',
      }}>{name}</h2>
      <p style={{
        fontSize:"15px",
        marginBottom:"1px"
      }}>{message}</p>
      {status === 'error' ? (
        <p>Status: Error</p>
      ) : (
        <p>Status: Success</p>
      )}
    </div>
  );
}

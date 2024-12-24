import React from 'react';
import {Scissors , Plus } from 'lucide-react'

const BubbleMenu = ({ rect, onAction }) => {
    const styles = {
        position: "absolute",  // Ensure it's positioned absolutely
        top: rect.top + window.scrollY + rect.height + 10, // Offset slightly below the selection
        left: rect.left + window.scrollX + rect.width / 2 - 100, // Center the menu on the selection
        zIndex: 10,
        backgroundColor: 'cream', // White background for the menu
        padding: '16px 20px',
        borderRadius: '12px', // More rounded corners
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)', // Larger shadow for depth
        textAlign: 'center', 
      };

  return (
    <div className="bubble-menu" style={styles}>
      <button className="bubble-menu-button"  onClick={() => onAction('shorten')}> <Scissors color='red' /></button>
      <button className="bubble-menu-button"  onClick={() => onAction('lengthen')}><Plus color = "green"/></button>
        {/* <button onClick={}> Shorten it </button> */}
    </div> 
  );
};

export default BubbleMenu;

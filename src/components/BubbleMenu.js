import React from 'react';

const BubbleMenu = ({ rect, onAction }) => {
    const styles = {
        position: "absolute",  // Ensure it's positioned absolutely
        top: rect.top + window.scrollY + rect.height + 10, // Offset slightly below the selection
        left: rect.left + window.scrollX + rect.width / 2 - 100, // Center the menu on the selection
      };

  return (
    <div className="bubble-menu" style={styles}>
      <button onClick={() => onAction('shorten')}>Make it Shorter</button>
      <button onClick={() => onAction('lengthen')}>Make it Longer</button>
        {/* <button onClick={}> Shorten it </button> */}
    </div> 
  );
};

export default BubbleMenu;

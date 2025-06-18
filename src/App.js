
import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString()); // Note: eval is unsafe for user input
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = ['7', '8', '9', '/', 
                   '4', '5', '6', '*', 
                   '1', '2', '3', '-', 
                   '0', '.', '=', '+', 'C'];

  return (
    <div style={styles.container}>
      <div style={styles.display}>{input || '0'}</div>
      <div style={styles.grid}>
        {buttons.map((btn) => (
          <button key={btn} style={styles.button} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '200px',
    margin: '50px auto',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  display: {
    height: '40px',
    marginBottom: '10px',
    textAlign: 'right',
    padding: '10px',
    fontSize: '18px',
    backgroundColor: '#fff',
    borderRadius: '5px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '5px'
  },
  button: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#eee',
    cursor: 'pointer'
  }
};

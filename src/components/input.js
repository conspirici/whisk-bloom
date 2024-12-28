import { useState } from 'react';

function Input({ onInput }) {
  const [input, setInput] = useState('');

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        placeholder="Enter the ingredients"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (input !== '') {
              onInput(input);
              setInput('');
            }
          }
        }}
      />
      <button onClick={() => {
        if (input !== '') {
          onInput(input);
          setInput('');
        }
      }}>Add Ingredient</button>
    </div>
  );
}

export default Input;

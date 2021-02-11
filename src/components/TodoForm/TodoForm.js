import React, { useContext, useState } from 'react';
import { StatusContext } from '../../App';
import { v4 } from 'uuid';

const TodoForm = () => {
  const [state, setState] = useContext(StatusContext);
  const [text, setText] = useState('');
  const addItem = () => {
    setState((prev) => {
      return {
        ...prev,
        todo: {
          title: 'Todo',
          items: [
            {
              id: v4(),
              name: text,
            },
            ...prev.todo.items,
          ],
        },
      };
    });

    setText('');
  };

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoForm;

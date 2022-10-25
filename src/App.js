import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

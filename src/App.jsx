import React from 'react';
import Books from './Books'
import './style.css'; 
import './responsive.css'; 

function App() {
  return (
      <>
        <header className="container">
          <h1>ספריה</h1>
        </header>
          <Books/>
      </>
  );
}

export default App;

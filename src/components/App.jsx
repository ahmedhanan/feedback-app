import React from 'react';
import Card from './Card';
import Nav from './Nav';

function App() {
  return (
    <div className='min-h-screen bg-primary'>
      <Nav />
      <div className='p-8 max-w-lg mx-auto'>
        <Card />
      </div>
    </div>
  );
}

export default App;

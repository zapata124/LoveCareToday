import React from 'react';
import beatingHeart from './assets/beatingheart.gif';
import MainCard from './components/list/List';
function App() {
  return (
    <div className='App'>
      <img src={beatingHeart} alt='beating heart' />
      <MainCard />
    </div>
  );
}

export default App;

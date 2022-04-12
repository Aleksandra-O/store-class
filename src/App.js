import React from 'react';
import './App.css';
import ShopItem from './mock/ShopItem.js';
import ShopItemClass from './ShopItemClass.js';

function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item = {ShopItem} />
    </div>
  </div>
  );
}

export default App;

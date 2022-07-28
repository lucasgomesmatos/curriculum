import React from 'react';
import MainContent from './components/MainContent';
import Slidebar from './components/Slidebar';
import './styles/components/app.sass';

const App = () => {
  return (
    <div id="portfolio">
      <h1>Lucas Gomes Matos</h1>
      <Slidebar />
      <MainContent />
    </div>
  );
};

export default App;

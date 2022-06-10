import React, { useState } from 'react';
import '../styles/main-styles.css';
import ArrowButton from './buttons/ArrowButton';
import Button from './buttons/Button';
import Icon from './Icon';
import MainHeader from "./MainHeader";
import Tag from './tag/Tag';

function App()
{
  const [isDisabled, setDisabled] = useState(false);

  function closeTag(event: React.MouseEvent<HTMLImageElement>)
  {
  }

  return (
    <div className="App">
      <MainHeader />
    </div>
  );
}

export default App;

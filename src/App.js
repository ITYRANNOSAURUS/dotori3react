import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Cardata from './cardata/Cardata';
import Header from './header/Header';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/media/cardata')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])
  return (
    <>
      <Header />
      <Cardata />
    </>
  )
}

export default App;
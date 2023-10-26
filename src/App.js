import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Cardata from './cardata/Cardata';
import Header from './header/Header';
import Loading from './loading/Loading';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 관리

  useEffect(() => {
    // 데이터를 가져오는 비동기 작업을 시뮬레이트
    setTimeout(() => {
      fetch('/media/cardata')
        .then(response => response.text())
        .then(message => {
          setMessage(message);
          setIsLoading(false); // 2초 후에 로딩 완료로 설정
        });
    }, 2500); // 2초 지연
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Cardata />
        </>
      )}
    </>
  );
}

export default App;
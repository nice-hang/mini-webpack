import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // 使用useEffect钩子处理副作用
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // 处理点击事件
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React App with Webpack</h1>
        <p>This is a React application built with webpack.</p>
        
        <div className="counter-section">
          <p>You clicked {count} times</p>
          <button onClick={handleIncrement}>Click me</button>
        </div>
        
        <div className="visibility-section">
          <button onClick={handleToggleVisibility}>
            {isVisible ? 'Hide' : 'Show'} additional content
          </button>
          {isVisible && (
            <div className="additional-content">
              <p>Additional content that can be toggled.</p>
              <p>This demonstrates conditional rendering in React.</p>
            </div>
          )}
        </div>
        
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
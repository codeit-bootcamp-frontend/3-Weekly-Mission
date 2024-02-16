import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  
);

// (method) Document.getElementById(elementId: string): HTMLElement | null 여기서 Document.getElementById 함수는 
// 반환갑이 HTMLElement | null 이다. 즉, null일 수도 있다는 뜻이다. 
//createRoot는 null 타입을 인수로 받지 않는다. 
//as HTMLElement는 null이 아님을 보장해주는 역할을 한다.
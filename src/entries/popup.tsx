import React from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/styles/tailwind.css';

const init = () => {
  const container = document.querySelector('#__root');
  if (!container) throw new Error("Can't find Popup root element");
  const root = createRoot(container);
  root.render(<>Lorem Ipsum.</>);
};

init();

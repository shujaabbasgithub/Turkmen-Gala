import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';

// Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "react-medium-image-zoom/dist/styles.css";
import "react-multi-carousel/lib/styles.css";
import "./assets/css/style.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
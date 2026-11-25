import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import '@fontsource/cairo/300.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/600.css';
import App from './App.jsx';
import './styles.css';
import './site.css';

createRoot(document.getElementById('root')).render(<App />);

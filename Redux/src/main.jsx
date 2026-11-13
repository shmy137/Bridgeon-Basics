// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import store from './components/store.js'
// import { Provider } from 'react-redux'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>

//     <App />
//     </Provider>
//   </StrictMode>,
// )

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import store from './components/multipleReducers/store.js'

// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./components/fetch/fetch2/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);

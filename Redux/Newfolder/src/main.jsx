import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import store from "./Redux/store.js";
import { Provider } from "react-redux";
import store from './fetch/store.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}

<Provider store={store}>
  
      <App />
</Provider>
    {/* </Provider> */}
  </StrictMode>,
);

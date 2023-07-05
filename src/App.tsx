import './App.css'
import { Provider } from "react-redux";
import { Data } from './components/Data';
import { store } from './store/store';

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./features/apiSlice"

function App() {

  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <div className="App">
          <Data />
        </div>
      </ApiProvider>
    </Provider>
  )
}

export default App

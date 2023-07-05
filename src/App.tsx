import './App.css'
import { Provider } from "react-redux";
import { Data } from './components/Data';
import { store } from './store/store';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Data />
      </div>
    </Provider>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import './assest/main.scss';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import UserDetail from './component/UserDetail';
function App() {
  return (
    <>
    <Provider  store={store}>
        <UserDetail />
    </Provider>
    </>
  );
}

export default App;

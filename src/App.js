import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/Auth/Signin/Signin';
import Signup from './pages/Auth/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Signup />}></Route>
        <Route path='/signin' element={ <Signin />}></Route>
      </Routes>

    </div>
  );
}

export default App;

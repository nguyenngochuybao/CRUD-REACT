
import './App.css';
import User from './component/user';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={  <User/> } />
        <Route path='/Add' element={  <User/> } />
      </Routes>
    </div>
  );
}

export default App;

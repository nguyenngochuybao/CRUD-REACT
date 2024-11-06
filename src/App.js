import './App.css';

import User from './component/user';
import Add from './component/add';
import Update from './component/update';

import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={  <User/> } />
        <Route path='/Add' element={ <Add /> } />
        <Route path='/edit/:id' element={  <Update/> } />
      </Routes>
    </div>
  );
}

export default App;

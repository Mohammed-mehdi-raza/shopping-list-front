import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home.js';
import User from './components/User/User.js';

function App() {
  return (
    <>  
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/user' element={<User/>} />
      </Routes>
    </>
  );
}

export default App;

import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Quiz from './Pages/Quiz';
import Report from './Pages/Report';
import './App.css';

function App() {
  return (
    <div
    
    >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Quiz/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/report' element={<Report/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

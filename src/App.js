import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './views/home/home'
import List from './views/list/list'
import Login from './views/login/login'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

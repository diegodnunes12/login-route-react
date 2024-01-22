import { AuthContextProvider } from './context/auth';
import { Feed } from './pages/feed';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Signup } from './pages/sign-up';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">      
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;

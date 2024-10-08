import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Schedule from './pages/Schedule';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
<div className="bg-background overflow-hidden h-screen pb-24">
  <Routes>
    <Route path="/main" element={<Main />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
  
  {/* Navigation Bar */}
  <NavBar />
</div>

    </Router>
  );
}

export default App;

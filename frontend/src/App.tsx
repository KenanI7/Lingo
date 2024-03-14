// App.tsx
import React, { useState } from 'react';
import { Router } from '@reach/router';
import Sidebar from './components/sidebar'; 
import Hamburger from './components/hamburger'; 
import LessonsPage from './pages/LessonsPage';
import MyProgressPage from './pages/MyProgressPage';
import SavedPage from './pages/SavedPage';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen">
      <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <Sidebar />

      <div className="flex-grow bg-gray-100 p-8">
        
        <Router>
          <MyProgressPage path="/my-progress" />
          <SavedPage path="/saved" />
          <LessonsPage path="/lessons" />
        </Router>
      </div>
    </div>
  );
};

export default App;

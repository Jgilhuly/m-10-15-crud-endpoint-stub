import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage products and users</p>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="app-main">
        {activeTab === 'products' ? <ProductList /> : <UserList />}
      </main>
    </div>
  );
}

export default App;

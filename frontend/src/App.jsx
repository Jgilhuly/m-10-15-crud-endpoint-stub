import { useState } from 'react';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Admin Dashboard</h1>
        <p>Manage products and users</p>
      </header>

      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="app-main">
        {activeTab === 'products' ? <ProductList /> : <UserList />}
      </main>
    </div>
  );
}

export default App;

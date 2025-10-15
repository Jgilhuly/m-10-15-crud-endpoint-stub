export default function Navigation({ activeTab, onTabChange }) {
  return (
    <nav className="navigation">
      <button
        className={`nav-tab ${activeTab === 'products' ? 'active' : ''}`}
        onClick={() => onTabChange('products')}
      >
        Products
      </button>
      <button
        className={`nav-tab ${activeTab === 'users' ? 'active' : ''}`}
        onClick={() => onTabChange('users')}
      >
        Users
      </button>
    </nav>
  );
}


# Admin Dashboard Frontend

A React-based admin dashboard for managing products and users. This frontend communicates with a FastAPI backend.

## Prerequisites

- Node.js (v16 or higher)
- npm
- FastAPI backend running on `http://localhost:8000`

## Installation

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the port shown in the terminal).

## Features

### Product Management
- View all products in a table
- Create new products with fields:
  - Name
  - Description
  - Price
  - Category
  - Tags (comma-separated)
  - In Stock status
- Edit existing products
- Delete products (with confirmation)

### User Management
- View all users in a table
- Create new users with fields:
  - Username
  - Email
  - Password
- Edit existing users
- Delete users (with confirmation)

## Backend Requirements

The frontend expects the FastAPI backend to be running on `http://localhost:8000` with the following endpoints:

**Products:**
- `GET /products` - List all products
- `POST /products` - Create a new product
- `GET /products/{id}` - Get a specific product
- `PUT /products/{id}` - Update a product
- `DELETE /products/{id}` - Delete a product

**Users:**
- `GET /users` - List all users
- `POST /users` - Create a new user
- `GET /users/{id}` - Get a specific user
- `PUT /users/{id}` - Update a user
- `DELETE /users/{id}` - Delete a user

## Technology Stack

- React 18
- Vite (build tool)
- Vanilla CSS (no frameworks)
- Fetch API for HTTP requests

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Tab navigation
│   │   ├── ProductList.jsx     # Product CRUD interface
│   │   ├── ProductForm.jsx     # Product create/edit form
│   │   ├── UserList.jsx        # User CRUD interface
│   │   └── UserForm.jsx        # User create/edit form
│   ├── services/
│   │   └── api.js              # API client
│   ├── App.jsx                 # Main application
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Build for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

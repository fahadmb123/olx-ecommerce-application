# OLX E-Commerce Application

A full-stack OLX-like e-commerce application where users can register, log in, sell products, browse products, filter products by category, manage their cart, and place orders.

The application is built using React and TypeScript for the frontend and Express, TypeScript, and MongoDB for the backend.

---

## 🚀 Features

### Authentication
- User registration
- User login
- JWT-based authentication
- Protected routes
- Public routes
- Authentication error handling

### Product Management
- View all available products
- View product details
- Filter products by category
- Add new products
- Edit existing products
- Delete products
- Upload product images
- Display product stock status
- Display sold-out products

### Cart
- Add products to cart
- Increase product quantity
- Decrease product quantity
- Remove products from cart
- Maximum quantity validation
- Stock availability validation
- Display cart item count
- Calculate cart subtotal
- Display order summary

### Checkout
- View products before placing an order
- Display product quantities
- Display subtotal
- Display total amount
- Place an order
- Order confirmation page

### UI
- Responsive product cards
- Loading indicators
- Toast notifications
- Product stock badges
- Sold-out indicators
- Protected and public route handling

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Redux Toolkit
- React Router DOM
- React Hook Form
- Zod
- Axios
- React Toastify
- Vite
- CSS

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- Cloudinary
- Multer
- Zod

---

## 📁 Project Structure

### Frontend

```text
Frontend/
└── src/
    ├── assets/
    ├── components/
    │   ├── Card/
    │   ├── CartCard/
    │   ├── Form/
    │   ├── Layout/
    │   ├── Loader/
    │   ├── Navbar/
    │   ├── ProtectedRoute.tsx
    │   └── PublicRoute.tsx
    │
    ├── features/
    │   └── auth/
    │       ├── authApi.ts
    │       ├── authSlice.ts
    │       └── authThunk.ts
    │
    ├── hooks/
    │   ├── dispatchHook.ts
    │   └── productHooks.ts
    │
    ├── pages/
    │   ├── AddEditProduct/
    │   ├── Auth/
    │   ├── Cart/
    │   ├── Checkout/
    │   ├── Home/
    │   ├── OrderPlaced/
    │   ├── ProductDetails/
    │   └── Sell/
    │
    ├── redux/
    │   └── store.ts
    │
    ├── routes/
    │   └── AppRoutes.tsx
    │
    ├── types/
    │   ├── auth/
    │   └── product/
    │
    ├── validation/
    │   ├── authSchema.ts
    │   └── productSchema.ts
    │
    ├── App.tsx
    ├── App.css
    ├── index.css
    └── main.tsx

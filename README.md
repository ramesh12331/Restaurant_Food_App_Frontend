# 📘 Restaurant Dashboard – Complete Detailed README

---

# 🧾 1. Project Definition

The Restaurant Dashboard is a React-based web application designed for browsing restaurants, viewing offers, locations, and navigating into each restaurant to explore its menu. It is built using **React, TailwindCSS, React Router**, and integrates with backend APIs.

---

# 🏗 2. Project Workflow Overview

### Step 1: User visits Landing Page

Restaurant chains and collections load dynamically.

### Step 2: User selects a restaurant

Dynamic route opens using `/products/:firmId`.

### Step 3: Product page loads menu items

Backend API fetches real-time product data.

### Step 4: User views detailed menu

Images, prices, and descriptions shown.

---

# 📚 3. Syntax (Core Application Syntax)

## 3.1 React Router Syntax

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/products/:firmId" element={<ProductMenu />} />
  </Routes>
</BrowserRouter>
```

## 3.2 Fetch API Syntax

```jsx
const response = await fetch(`${API_URI}/vendor/all-vendors`);
const data = await response.json();
```

## 3.3 useParams() Syntax

```jsx
const { firmId } = useParams();
```

---

# 💻 4. Component Breakdown

## 4.1 Chains Component

* Displays horizontally scrollable restaurants
* Includes loader animation
* Uses image overlay for details
* Scroll buttons for left/right

## 4.2 FirmCollection Component

* Displays restaurant cards in a grid layout
* Shows offer badge on image
* Clickable cards navigate to product page

## 4.3 ProductMenu Component

* Shows restaurant name
* Lists all products for selected firm
* Displays price, description, and image

---

# 🔌 5. API Flow Explanation

## Vendors API

**GET** `/vendor/all-vendors`

Response example:

```json
{
  "vendor": [
    {
      "_id": "vendor123",
      "firm": [
        {
          "_id": "firm001",
          "firmName": "Spice Hub",
          "image": "spice.jpg",
          "area": "Hyderabad",
          "offer": "30% OFF"
        }
      ]
    }
  ]
}
```

## Products API

**GET** `/product/:firmId/products`

Response example:

```json
{
  "restaurantName": "Spice Hub",
  "products": [
    { "productName": "Paneer Curry", "price": 120, "image": "1.jpg" }
  ]
}
```

---

# ⚙ 6. Installation & Commands

### Install dependencies

```
npm install
```

### Install Router

```
npm install react-router-dom
```

### Install Loader

```
npm install react-loader-spinner
```

### Run Development Server

```
npm run dev
```

### Build for Production

```
npm run build
```

---

# 🧩 7. Technology Stack

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| React            | UI + State Management             |
| Tailwind CSS     | Fast Styling with Utility Classes |
| React Router DOM | Navigation + Dynamic Routing      |
| Fetch API        | Backend Communication             |
| React Icons      | UI Icons                          |
| Loader Spinner   | Loading Animations                |
| Vite             | Lightning Fast Dev Server         |

---

# 🎯 8. Purpose of the Project

* Provide scalable multi-restaurant browsing UI
* Showcase real-time API-driven content
* Improve navigation experience using React Router
* Serve as a foundation for food-delivery platforms like Swiggy/Zomato clones
* Demonstrate clean component-based structure

---

# 📝 9. Final Summary

The Restaurant Dashboard is a modern, scalable, and API-integrated React application. It fetches real-time restaurant and product data, displays them neatly using TailwindCSS, and supports smooth navigation using React Router. This documentation contains complete details: definitions, syntax, examples, purpose, architecture, installation, and summary.

It is ideal for building food delivery apps, restaurant menu systems, and multi-vendor dashboards.

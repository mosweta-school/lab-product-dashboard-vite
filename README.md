## 🛒 Product Dashboard
A dynamic e-commerce dashboard built with React and Vite. This application allows users to browse a product catalog, filter by availability, and manage inventory with a "Remove" feature. 

## 🚀 Key Features
- Dynamic Rendering: Iterates over a product list to generate responsive cards.
- Availability Filtering: Users can toggle between "All", "In Stock", and "Out of Stock" products.
- Conditional Styling: Out-of-stock products are visually distinct (grayed out) to improve user experience.
- Inventory Management: Integrated "Remove" functionality to update the dashboard state in real-time.
- Mobile Responsive: Styled with CSS Modules and Material UI (MUI) for a professional look on any device. 

## 🛠️ Tech Stack
- Frontend: React.js (Functional Components & Hooks)
- Build Tool: Vite
- Styling: CSS Modules & Material UI
- Testing: Jest & React Testing Library

## 📁 Project Structure

src/
├── components/
│   ├── ProductList.jsx   # Parent: Maps and filters products
│   └── ProductCard.jsx   # Child: Displays individual item 
├── styles/
│   └── ProductCard.module.css # Scoped component styling
├── App.jsx               # Main state manager and logic hub
└── main.jsx              # Entry point for the Vite application

## ⚙️ Installation & Setup
1. Clone the repository:
```bash
git clone https://github.com
cd lab-product-dashboard-vite
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
N.B:View the app at the local link provided in your terminal (usually http://localhost:5173). 
4. Running Tests 
This project uses Jest to ensure all components render correctly and handle edge cases. To run the automated test,
```bash
npm test
```
 
## 📈 Future Improvements
- Add a search bar to filter products by name.
- Implement a form to allow users to add new products dynamically.
- Connect to a real backend API (e.g., using db.json with JSON Server).
